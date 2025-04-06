export const feedbackAdminTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Feedback</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fff;
      color: #333;
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
    .message-box {
      background: #f9f9f9;
      border-left: 4px solid #ccc;
      padding: 15px;
      margin: 20px 0;
    }
    .detail-item {
      margin-bottom: 10px;
    }
    .footer p {
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>📬 New Feedback Notification</h2></div>
    <div class="content">
      <p><strong>Rating:</strong> ${data.rating} / 5</p>
      <div class="detail-item"><strong>Name:</strong> ${data.name}</div>
      <div class="detail-item"><strong>Email:</strong> ${data.email}</div>
      <div class="detail-item"><strong>Subject:</strong> ${data.subject}</div>
      <div class="message-box">
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
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
export const feedbackUserTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Your Feedback</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fff;
      color: #333;
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
    .message-box {
      background: #f9f9f9;
      border-left: 4px solid #ccc;
      padding: 15px;
      margin: 20px 0;
    }
    .footer p {
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>🙏 Thank You, ${data.name}</h2></div>
    <div class="content">
      <p>We truly appreciate your feedback and rating of <strong>${data.rating} out of 5</strong>.</p>

      <div class="message-box">
        <p><strong>Your message:</strong></p>
        <p>${data.message}</p>
      </div>

      <p>We review all feedback to improve your experience. If we need more info, we may reach out to you.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} NextStep. All rights reserved.</p>
      <p>Nanded, Maharashtra, India</p>
    </div>
  </div>
</body>
</html>
`;