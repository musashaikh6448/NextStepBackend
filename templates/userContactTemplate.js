export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fff;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #eee;
    }
    .header, .footer {
      padding: 20px;
      text-align: center;
      background-color: #f7f7f7;
    }
    .content {
      padding: 20px;
    }
    .message-box {
      background-color: #f1f1f1;
      border-left: 4px solid #ccc;
      padding: 10px;
      margin: 15px 0;
    }
    .action-link {
      display: inline-block;
      background: #111;
      color: #fff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
    }
    .footer p {
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Hello ${data.name},</h2>
    </div>
    <div class="content">
      <p>Thanks for getting in touch with <strong>NextStep</strong>.</p>
      <p>We appreciate you reaching out and will get back to you shortly.</p>

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
      <p>&copy; ${new Date().getFullYear()} NextStep. All rights reserved.</p>
      <p>Nanded, Maharashtra, India</p>
    </div>
  </div>
</body>
</html>
`;