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
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .header, .footer {
            text-align: center;
            padding: 20px;
        }
        .header {
            background-color: #2c3e50;
            color: white;
        }
        .content {
            padding: 20px;
        }
        .detail-item {
            margin-bottom: 15px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }
        .detail-item:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #2c3e50;
        }
        .message-box {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
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
                <div>${data.name}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Email</div>
                <div>${data.email}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Inquiry Type</div>
                <div>${data.inquiryType}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Subject</div>
                <div>${data.subject}</div>
            </div>
            <div class="message-box">
                <div class="detail-label">Message</div>
                <div>${data.message}</div>
            </div>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} NextStep</p>
            <p>Nanded, Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;