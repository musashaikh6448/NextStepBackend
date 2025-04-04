export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
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
            margin-bottom: 20px;
        }
        .cta-button {
            display: block;
            padding: 12px;
            background: #2c3e50;
            color: white;
            text-align: center;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You for Contacting Us</h1>
        </div>
        <div class="content">
            <h2>Hello ${data.name},</h2>
            
            <div class="message-box">
                <p>We've received your <strong>${data.inquiryType}</strong> inquiry and will respond within 24 hours.</p>
                <ul style="padding-left: 20px;">
                    <li><strong>Case ID:</strong> ${Date.now().toString(36).toUpperCase()}</li>
                    <li><strong>Subject:</strong> ${data.subject}</li>
                </ul>
            </div>
            
            <div class="detail-item">
                <div class="detail-label">Your Message</div>
                <div>${data.message}</div>
            </div>
            
            <a href="mailto:${process.env.ADMIN_EMAIL}" class="cta-button">Contact Support</a>
            <a href="https://next-step-kappa-murex.vercel.app/support" class="cta-button">Visit Support Portal</a>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} NextStep</p>
            <p>Nanded, Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;