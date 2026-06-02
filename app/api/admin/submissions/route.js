import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Submission from "@/lib/models/Submission";
import { verifyAdmin } from "@/lib/auth";

// GET — list all submissions
export async function GET(request) {
  const admin = await verifyAdmin();
  if (!admin)
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  await connectDB();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const filter = status && status !== "all" ? { status } : {};

  const submissions = await Submission.find(filter)
    .sort({ createdAt: -1 })
    .lean();
  const counts = await Submission.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  const unread = await Submission.countDocuments({ read: false });

  return NextResponse.json({ success: true, submissions, counts, unread });
}

// PATCH — update status or mark read
export async function PATCH(request) {
  const admin = await verifyAdmin();
  if (!admin)
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  const { id, status, read } = await request.json();
  await connectDB();

  const update = {};
  if (status) update.status = status;
  if (read !== undefined) update.read = read;

  await Submission.findByIdAndUpdate(id, update);
  return NextResponse.json({ success: true });
}

// DELETE — delete a submission
export async function DELETE(request) {
  const admin = await verifyAdmin();
  if (!admin)
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );

  const { id } = await request.json();
  await connectDB();
  await Submission.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
