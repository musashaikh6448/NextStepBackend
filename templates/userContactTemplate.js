export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #333333;
            line-height: 1.5;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e0e0e0;
        }
        .header, .footer {
            padding: 20px;
            text-align: center;
        }
        .header {
            background-color: #f8f8f8;
            border-bottom: 1px solid #e0e0e0;
        }
        .content {
            padding: 20px;
        }
        .detail-item {
            margin-bottom: 15px;
        }
        .message-box {
            padding: 15px;
            background-color: #f8f8f8;
            border-left: 3px solid #d0d0d0;
            margin: 15px 0;
        }
        .action-item {
            margin: 20px 0;
            text-align: center;
        }
        .action-link {
            display: inline-block;
            padding: 10px 20px;
            background-color: #333333;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
        }
        .footer {
            font-size: 12px;
            color: #777777;
            border-top: 1px solid #e0e0e0;
            background-color: #f8f8f8;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h2>Thank You for Contacting Us</h2>
        </div>
        <div class="content">
            <p>Dear ${data.name},</p>
            
            <div class="message-box">
                <p>We've received your <strong>${data.inquiryType}</strong> inquiry and will respond within 24 hours.</p>
                <ul>
                    <li><strong>Reference ID:</strong> ${Date.now().toString(36).toUpperCase()}</li>
                    <li><strong>Subject:</strong> ${data.subject}</li>
                </ul>
            </div>
            
            <div class="detail-item">
                <p><strong>Your message:</strong></p>
                <p>${data.message}</p>
            </div>
            
            <div class="action-item">
                <p>If you need immediate assistance, please contact us:</p>
                <a href="mailto:${process.env.ADMIN_EMAIL}" class="action-link">Email Support</a>
            </div>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} NextStep. All rights reserved.</p>
            <p>Nanded, Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;