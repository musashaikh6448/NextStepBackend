export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Reaching Out</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #e2e8f0;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background-color: #1e293b;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    .header, .footer {
      background-color: #0f172a;
      padding: 20px;
      text-align: center;
    }
    .header img {
      max-width: 160px;
      margin-bottom: 10px;
    }
    .content {
      padding: 20px;
    }
    .message-box {
      background-color: #334155;
      border-left: 4px solid #38bdf8;
      padding: 15px;
      margin: 20px 0;
      color: #f1f5f9;
    }
    .footer p {
      font-size: 12px;
      color: #94a3b8;
    }
    a {
      color: #38bdf8;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.nxtstepx.com/assets/darkLogo-removebg-preview-CegAW90k.png" alt="NextStepX Logo" />
      <h2>Hello ${data.name},</h2>
    </div>
    <div class="content">
      <p>Thank you for reaching out to <strong>NextStep</strong>. We appreciate you taking the time to get in touch with us.</p>

      <p>Your message has been received, and our team is currently reviewing it. We strive to respond to all inquiries promptly and will get back to you as soon as possible.</p>

      <p>For your reference, here are the details of your submission:</p>

      <div class="message-box">
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
        <p><strong>Your Message:</strong></p>
        <p>${data.message}</p>
      </div>

      <p><strong>Need quicker help?</strong></p>
      <p>
        <a href="mailto:${process.env.ADMIN_EMAIL}" class="action-link">Contact Support</a>
      </p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} <a href="https://nxtstepx.com">NextStep</a>. All rights reserved.</p>
      <p>Nanded, Maharashtra, India</p>
    </div>
  </div>
</body>
</html>
`;
