"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDING FUNCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const name = formData.get("name");
  const email = formData.get("email");

  if (!message || !name || !email) {
    return {
      error: "Invalid form data",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `sabrexghosh@gmail.com`,
      subject: `${name} From Contact Form`,
      replyTo: `${email}`,
      text: `
    You have received a new message from your website contact form.

    Name: ${name}
    Email: ${email}

    Message:
    ${message}

    ---
    This email was sent from the contact form on your website.
`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Failed to send email",
    };
  }
};
