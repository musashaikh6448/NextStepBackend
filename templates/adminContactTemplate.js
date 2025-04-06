export const adminContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #ffffff;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
    }
    .header, .footer {
      background: #f1f1f1;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
    }
    .detail-item {
      margin-bottom: 12px;
    }
    .detail-label {
      font-weight: bold;
      color: #222222;
    }
    .message-box {
      background: #f9f9f9;
      border-left: 4px solid #cccccc;
      padding: 15px;
      margin-top: 20px;
    }
    .footer p {
      font-size: 12px;
      color: #777777;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📨 New Inquiry Received</h2>
    </div>
    <div class="content">
      <div class="detail-item">
        <div class="detail-label">Name:</div>
        <div>${data.name}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Email:</div>
        <div>${data.email}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Inquiry Type:</div>
        <div>${data.inquiryType}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Subject:</div>
        <div>${data.subject}</div>
      </div>
      <div class="message-box">
        <div class="detail-label">Message:</div>
        <div>${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} NextStep. All rights reserved.</p>
      <p>Nanded, Maharashtra, India</p>
    </div>
  </div>
</body>
</html>
`;