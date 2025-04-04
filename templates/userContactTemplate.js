export const userContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting NextStep!</title>
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
            margin-bottom: 15px;
        }
        .cta-button {
            display: inline-block;
            width: 100%;
            padding: 14px;
            background: #6366f1;
            color: white !important;
            text-align: center;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>We've Received Your Inquiry!</h1>
            <p>Our team is already working on your request</p>
        </div>
        <div class="content">
            <h2>Hello ${data.name},</h2>
            <div class="message-box">
                <p>
                    Thank you for reaching out to NextStep! We're excited to assist with
                    your <strong>${data.inquiryType}</strong> inquiry. Here's what you
                    can expect:
                </p>
                <ul style="list-style: none; padding-left: 15px; color: #333;">
                    <li>🔹 <strong>Response Time:</strong> We'll get back to you within 24 hours</li>
                    <li>🔹 <strong>Case ID:</strong> ${Date.now().toString(36).toUpperCase()}</li>
                    <li>🔹 <strong>Support Channel:</strong> You'll receive updates via email</li>
                </ul>
            </div>
            <div class="detail-item">
                <div class="detail-label">Subject</div>
                <div class="detail-value">${data.subject}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Message</div>
                <div class="detail-value">${data.message}</div>
            </div>
            <a href="mailto:${process.env.ADMIN_EMAIL}" class="cta-button">Send Follow-up</a>
            <a href="https://next-step-kappa-murex.vercel.app/support" class="cta-button" style="background: #10b981;">Check Support Portal</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 NextStep - Your Future Starts Here</p>
            <p>Nanded, Maharashtra 431605</p>
            <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">
                This is an automated message. Please do not reply directly to this email.
            </p>
        </div>
    </div>
</body>
</html>
`;
