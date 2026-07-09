import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { validateContactForm, hasErrors } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Server-side validation using shared validation library
    const errors = validateContactForm({ name, email, phone, message });

    if (hasErrors(errors)) {
      return NextResponse.json(
        { error: "Validation failed", fieldErrors: errors },
        { status: 400 },
      );
    }

    await sendContactEmail({ name, email, phone: phone || "", message });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
