import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const adminEmail = process.env.ADMIN_GOOGLE_MAIL;

  if (!adminEmail) {
    throw new Error("ADMIN_GOOGLE_MAIL not configured");
  }

  await transporter.sendMail({
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    replyTo: data.email,
    to: adminEmail,
    subject: `New Contact Message from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Message</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
            <td style="padding: 10px 0; color: #333;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px 0; color: #333;">
              <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 10px 0; color: #333;">
              <a href="tel:${data.phone}" style="color: #0066cc;">${data.phone}</a>
            </td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 6px;">
          <h3 style="color: #555; margin-top: 0;">Message:</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>

        <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
  });
}
