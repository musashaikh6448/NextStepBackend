export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You for Contacting NextStep!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

      body {
        margin: 0;
        padding: 20px;
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        background-color: #f5f5f5;
      }

      .email-wrapper {
        max-width: 720px;
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        border: 1px solid #e5e7eb;
      }

      .header-section {
        background: linear-gradient(90deg, #6366f1, #7c3aed);
        padding: 40px 30px;
        text-align: center;
        position: relative;
      }

      .header-section img.logo {
        width: 180px;
        margin-bottom: 12px;
      }

      .header-section h1 {
        color: white;
        font-size: 28px;
        margin: 0;
        font-weight: 600;
      }

      .header-section p {
        color: rgba(255, 255, 255, 0.8);
        margin: 8px 0 0;
        font-size: 16px;
      }

      .hero-image {
        width: 100%;
        max-height: 320px;
        object-fit: contain;
        border-bottom: 1px solid #e5e7eb;
      }

      .content-section {
        padding: 30px;
        background: #ffffff;
      }

      .content-section h2 {
        color: #1f2937;
        font-size: 24px;
        margin-bottom: 20px;
      }

      .detail-box {
        background: #f9fafb;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        border: 1px solid #e5e7eb;
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .detail-row:last-child {
        margin-bottom: 0;
      }

      .detail-label {
        font-weight: 500;
        color: #374151;
        width: 35%;
      }

      .detail-value {
        font-weight: 400;
        color: #4b5563;
        width: 65%;
        word-break: break-word;
      }

      .message-box {
        background: #f9fafb;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        border: 1px solid #e5e7eb;
        white-space: pre-line;
      }

      .cta-button {
        display: inline-block;
        width: 100%;
        padding: 14px;
        background: linear-gradient(90deg, #6366f1, #7c3aed);
        color: white !important;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.2s ease;
      }

      .footer-section {
        padding: 20px;
        background: #f3f4f6;
        text-align: center;
        border-top: 1px solid #e5e7eb;
      }

      .footer-section p {
        margin: 8px 0;
        color: #64748b;
        font-size: 14px;
      }

      .social-icons {
        margin-top: 15px;
      }

      .social-icons a {
        margin: 0 10px;
        display: inline-block;
      }

      .social-icons img {
        width: 28px;
        height: 28px;
        transition: transform 0.2s;
      }

      /* Responsive Styles */
      @media (max-width: 600px) {
        .header-section {
          padding: 30px 20px;
        }

        .header-section h1 {
          font-size: 24px;
        }

        .detail-row {
          flex-direction: column;
          gap: 8px;
        }

        .detail-label {
          width: 100%;
        }

        .detail-value {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <img
          src="https://next-step-kappa-murex.vercel.app/assets/darkLogo-removebg-preview-CegAW90k.png"
          alt="NextStep Logo"
          class="logo"
        />
        <h1>We've Received Your Inquiry!</h1>
        <p>Our team is already working on your request</p>
      </div>

      <!-- Hero Image -->
      <img
        src="https://cdn.prod.website-files.com/619b7ac711243f15ea484033/660385aa1bc2d47d2ea7a72d_MQU8EbL8jQujzi-KJVQRG6gyAhkkE3L3U4Mjizmspi44OL_ZGpUKEMYI58cysgnUObMzQwlr0YvCnsMmrtv_2p9rjAvNmE1sk-Gf6YpJzf69tbdg5itrIPIut0swhfEmBCkDLzZO09HcdLbjvgEnAg.jpeg"
        alt="Confirmation Animation"
        class="hero-image"
      />

      <!-- Content Section -->
      <div class="content-section">
        <h2>Hello ${data.name},</h2>

        <div class="message-box">
          <p style="color: #4b5563">
            Thank you for reaching out to NextStep! We're excited to assist with
            your <strong>${data.inquiryType}</strong> inquiry. Here's what you
            can expect:
          </p>

          <ul style="list-style: none; padding-left: 15px; color: #374151">
            <li>
              🔹 <strong>Response Time:</strong> We'll get back to you within 24
              hours
            </li>
            <li>
              🔹
              <strong>Case ID:</strong> ${Date.now().toString(36).toUpperCase()}
            </li>
            <li>
              🔹 <strong>Support Channel:</strong> You'll receive updates via
              email
            </li>
          </ul>
        </div>

        <!-- Detail Boxes -->
        <div class="detail-box">
          <div class="detail-row">
            <span class="detail-label">Subject</span>
            <span class="detail-value">${data.subject}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Message</span>
            <span class="detail-value">${data.message}</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div style="display: flex; gap: 15px; flex-wrap: wrap">
          <a href="mailto:${process.env.ADMIN_EMAIL}" class="cta-button">
            Send Follow-up →
          </a>
          <a
            href="https://next-step-kappa-murex.vercel.app/support"
            class="cta-button"
            style="background: #10b981; border: none"
          >
            Check Support Portal →
          </a>
        </div>

        <!-- Fun Element -->
        <div style="text-align: center; margin: 30px 0">
          <img
            src="https://media.tenor.com/4tHn5BkQbQ0AAAAC/thank-you-meme.gif"
            alt="Thank You Meme"
            style="max-width: 240px; height: auto"
          />
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer-section">
        <p>&copy; 2024 NextStep - Your Future Starts Here</p>
        <p>Nanded, Maharashtra 431605</p>

        <p style="font-size: 12px; color: #9ca3af; margin-top: 10px">
          This is an automated message. Please do not reply directly to this
          email.
        </p>
      </div>
    </div>
  </body>
</html>
`;
