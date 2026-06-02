"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const STATUS_COLORS = {
  new: "bg-blue-100 text-blue-700 border-blue-200",
  contacted: "bg-amber-100 text-amber-700 border-amber-200",
  closed: "bg-green-100 text-green-700 border-green-200",
};
const STATUS_LABELS = { new: "New", contacted: "Contacted", closed: "Closed" };

function formatDate(iso) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState([]);
  const [counts, setCounts] = useState({});
  const [unread, setUnread] = useState(0);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/submissions?status=${filter}`);
    if (res.status === 401) {
      router.push("/admin");
      return;
    }
    const data = await res.json();
    if (data.success) {
      setSubmissions(data.submissions);
      const c = {};
      data.counts.forEach((x) => {
        c[x._id] = x.count;
      });
      setCounts(c);
      setUnread(data.unread);
    }
    setLoading(false);
  }, [filter, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateStatus = async (id, status) => {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setSubmissions((s) => s.map((x) => (x._id === id ? { ...x, status } : x)));
    if (selected?._id === id) setSelected((s) => ({ ...s, status }));
  };

  const markRead = async (submission) => {
    if (submission.read) return;
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: submission._id, read: true }),
    });
    setSubmissions((s) =>
      s.map((x) => (x._id === submission._id ? { ...x, read: true } : x)),
    );
    setUnread((u) => Math.max(0, u - 1));
  };

  const deleteSubmission = async (id) => {
    if (!confirm("Delete this submission?")) return;
    await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setSubmissions((s) => s.filter((x) => x._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const openDetail = (sub) => {
    setSelected(sub);
    markRead(sub);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-[#f0ede8] font-primary">
      {/* Top Nav */}
      <nav className="bg-[#0a192f] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-serif text-lg">Centum RCM</span>
          <span className="text-[#B98C29] text-xs font-bold uppercase tracking-widest border border-[#B98C29]/30 px-2 py-0.5 rounded">
            Admin
          </span>
          {unread > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {unread} new
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="text-slate-400 hover:text-white text-xs uppercase tracking-widest transition"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: total, color: "text-slate-800" },
            { label: "New", value: counts.new || 0, color: "text-blue-600" },
            {
              label: "Contacted",
              value: counts.contacted || 0,
              color: "text-amber-600",
            },
            {
              label: "Closed",
              value: counts.closed || 0,
              color: "text-green-600",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                {s.label}
              </p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", "new", "contacted", "closed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition border ${
                filter === f
                  ? "bg-[#0a192f] text-white border-[#0a192f]"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f === "all"
                ? `All (${total})`
                : `${STATUS_LABELS[f]} (${counts[f] || 0})`}
            </button>
          ))}
          <button
            onClick={fetchData}
            className="ml-auto px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest bg-white text-slate-500 border border-slate-200 hover:border-slate-400 transition"
          >
            ↻ Refresh
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1 space-y-3">
            {loading ? (
              <div className="text-center py-16 text-slate-400 text-sm">
                Loading...
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm bg-white rounded-2xl border border-slate-200">
                No submissions found
              </div>
            ) : (
              submissions.map((sub) => (
                <div
                  key={sub._id}
                  onClick={() => openDetail(sub)}
                  className={`bg-white rounded-2xl p-4 border cursor-pointer transition hover:shadow-md ${
                    selected?._id === sub._id
                      ? "border-[#B98C29] shadow-md"
                      : "border-slate-200"
                  } ${!sub.read ? "border-l-4 border-l-blue-500" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-bold text-slate-800 truncate ${!sub.read ? "font-extrabold" : ""}`}
                      >
                        {sub.name}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {sub.email}
                      </p>
                      <p className="text-xs text-slate-400">{sub.phone}</p>
                    </div>
                    <span
                      className={`shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${STATUS_COLORS[sub.status]}`}
                    >
                      {STATUS_LABELS[sub.status]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    {formatDate(sub.createdAt)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-[#0a192f] px-6 py-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-white font-bold text-lg">
                      {selected.name}
                    </h2>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {formatDate(selected.createdAt)}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteSubmission(selected._id)}
                    className="text-red-400 hover:text-red-300 text-xs uppercase tracking-widest transition border border-red-400/30 px-3 py-1.5 rounded-lg"
                  >
                    Delete
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Email", value: selected.email },
                      { label: "Phone", value: selected.phone },
                      { label: "Company", value: selected.company || "—" },
                    ].map((f) => (
                      <div
                        key={f.label}
                        className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                          {f.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-800 break-all">
                          {f.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  {selected.assist && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                        Message
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {selected.assist}
                      </p>
                    </div>
                  )}

                  {/* Status Update */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                      Update Status
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {["new", "contacted", "closed"].map((s) => (
                        <button
                          key={s}
                          onClick={() => updateStatus(selected._id, s)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border transition ${
                            selected.status === s
                              ? STATUS_COLORS[s] + " shadow-sm"
                              : "bg-white text-slate-400 border-slate-200 hover:border-slate-400"
                          }`}
                        >
                          {STATUS_LABELS[s]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Reply */}
                  <a
                    href={`mailto:${selected.email}?subject=Re: Your inquiry - Centum RCM&body=Dear ${selected.name},%0A%0AThank you for reaching out to Centum RCM.%0A%0A`}
                    className="flex items-center justify-center gap-2 w-full bg-[#B98C29] hover:bg-[#a07820] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-slate-300">
                <p className="text-4xl mb-3">📬</p>
                <p className="text-sm">Select a submission to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
