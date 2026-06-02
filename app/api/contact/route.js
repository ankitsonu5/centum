import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Submission from "@/lib/models/Submission";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, phone, company, assist } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 },
      );
    }

    // 1. Save to MongoDB
    await connectDB();
    await Submission.create({ name, email, phone, company, assist });

    // 2. Send mail
    await transporter.sendMail({
      from: `"Centum RCM Form" <${process.env.SMTP_USER}>`,
      to: "team@centumrcm.com",
      replyTo: email,
      subject: `New Contact Request from ${name} - Centum RCM`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
          <div style="background:#0a192f;padding:20px;text-align:center;">
            <h2 style="color:#fff;margin:0;">New Contact Inquiry</h2>
            <p style="color:#B98C29;margin:5px 0 0;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Centum RCM</p>
          </div>
          <div style="padding:30px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${
              assist
                ? `
            <div style="margin-top:20px;padding:15px;background:#f8f9fa;border-left:4px solid #B98C29;border-radius:4px;">
              <p style="margin:0;color:#555;"><strong>Message:</strong></p>
              <p style="margin:10px 0 0;font-style:italic;">${assist}</p>
            </div>`
                : ""
            }
          </div>
          <div style="background:#f4f5f7;padding:15px;text-align:center;border-top:1px solid #ddd;">
            <p style="font-size:12px;color:#777;margin:0;">© 2026 Centum RCM. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
