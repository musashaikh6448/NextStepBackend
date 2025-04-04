export const adminContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header, .footer {
            text-align: center;
            padding: 20px;
        }
        .header {
            background-color: #6366f1;
            color: white;
        }
        .content {
            padding: 20px;
        }
        .detail-item {
            margin-bottom: 15px;
        }
        .detail-label {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .detail-value {
            color: #333;
        }
        .message-box {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Inquiry Received</h1>
        </div>
        <div class="content">
            <div class="detail-item">
                <div class="detail-label">Name</div>
                <div class="detail-value">${data.name}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Email</div>
                <div class="detail-value">${data.email}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Inquiry Type</div>
                <div class="detail-value">${data.inquiryType}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Subject</div>
                <div class="detail-value">${data.subject}</div>
            </div>
            <div class="message-box">
                <div class="detail-label">Message</div>
                <div class="detail-value">${data.message}</div>
            </div>
        </div>
        <div class="footer">
            <p>&copy; 2024 NextStep - Your Future Starts Here.</p>
            <p>Nanded, Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;
