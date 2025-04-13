export const adminContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Inquiry Notification</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9;
        color: #333;
        margin: 0;
        padding: 0;
        line-height: 1.6;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #fff;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #2196f3;
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      }
      .header h2 {
        margin: 0;
      }
      .content {
        padding: 20px;
      }
      .detail-item {
        margin-bottom: 15px;
      }
      .detail-label {
        font-weight: bold;
        color: #2196f3;
      }
      .message-box {
        background-color: #f1f1f1;
        border-left: 5px solid #2196f3;
        padding: 15px;
        margin-top: 20px;
        font-style: italic;
      }
      .footer {
        background-color: #f7f7f7;
        padding: 20px;
        text-align: center;
        border-radius: 0 0 8px 8px;
      }
      .footer p {
        font-size: 12px;
        color: #666;
      }
      .action-link {
        display: inline-block;
        background-color: #2196f3;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        margin-top: 20px;
      }
      .action-link:hover {
        background-color: #1976d2;
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

        <a href="mailto:${data.email}" class="action-link">Reply to Inquiry</a>
      </div>
      <div class="footer">
        <p>© ${new Date().getFullYear()} NextStep. All rights reserved.</p>
        <p>Nanded, Maharashtra, India</p>
      </div>
    </div>
  </body>
</html>
`;
