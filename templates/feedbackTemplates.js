export const feedbackAdminTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Feedback Received</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9fafb;
        color: #1f2937;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e7eb;
      }
      .header {
        background-color: #0f172a;
        padding: 20px;
        text-align: center;
      }
      .header img {
        max-width: 160px;
        margin-bottom: 10px;
      }
      .header h2 {
        color: #ffffff;
        margin: 0;
      }
      .content {
        padding: 20px;
      }
      .content h3 {
        margin-top: 0;
        color: #111827;
      }
      .detail-item {
        margin-bottom: 10px;
      }
      .detail-item strong {
        display: inline-block;
        width: 100px;
        color: #374151;
      }
      .message-box {
        background-color: #f3f4f6;
        border-left: 4px solid #38bdf8;
        padding: 15px;
        margin: 20px 0;
        color: #1f2937;
      }
      .footer {
        background-color: #f9fafb;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #6b7280;
      }
      .footer a {
        color: #3b82f6;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img
          src="https://www.nxtstepx.com/assets/darkLogo-removebg-preview-CegAW90k.png"
          alt="NextStepX Logo"
        />
        <h2>📬 New Feedback Received</h2>
      </div>
      <div class="content">
        <h3>Feedback Details</h3>
        <div class="detail-item">
          <strong>Rating:</strong> ${data.rating} / 5
        </div>
        <div class="detail-item"><strong>Name:</strong> ${data.name}</div>
        <div class="detail-item"><strong>Email:</strong> ${data.email}</div>
        <div class="detail-item"><strong>Subject:</strong> ${data.subject}</div>
        <div class="message-box">
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      </div>
      <div class="footer">
        <p>
          © ${new Date().getFullYear()}
          <a href="https://nxtstepx.com">NextStep</a>. All rights reserved.
        </p>
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Your Feedback</title>
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
      margin: 4px 0;
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
      <h2>Thank You, ${data.name}</h2>
    </div>
    <div class="content">
      <p>We sincerely appreciate your time and feedback. Your insights are the compass that helps us steer <strong>NextStep</strong> in the right direction.</p>

      <p>At <strong>NextStep</strong>, our mission is to empower learners and aspiring developers with the right tools, resources, and motivation to unlock their true potential. Your feedback is a vital part of this continuous journey.</p>

      <div class="message-box">
        <p><strong>🌟 Your Rating:</strong> ${data.rating}/5</p>
        <p><strong>📝 Message:</strong><br/>${data.message}</p>
      </div>

      <p>Your thoughts have been forwarded to our team, and if anything requires clarification or a response, we may follow up with you directly.</p>

      <p>Meanwhile, stay connected with our growing community and continue exploring, learning, and building your future.</p>

      <p>🚀 Together, we rise. Together, we build the future.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} <a href="https://nxtstepx.com">NextStep</a>. All rights reserved.</p>
      <p>Nanded, Maharashtra, India</p>
      <p>Follow us on <a href="https://nxtstepx.com">Nxtstepx.com</a></p>
    </div>
  </div>
</body>
</html>
`;
