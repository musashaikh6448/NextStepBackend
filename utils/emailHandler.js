import { sendEmail } from "./emailService.js";

export const sendContactEmails = async ({
  adminTemplate,
  userTemplate,
  data,
  adminSubject,
  userSubject,
}) => {
  try {
    // Send admin notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: adminSubject,
      html: adminTemplate(data),
    });

    // Send user confirmation email
    await sendEmail({
      to: data.email,
      subject: userSubject,
      html: userTemplate(data),
    });

    return { success: true };
  } catch (error) {
    console.error("Email handler error:", error.message);
    throw new Error("Failed to send notification emails");
  }
};
