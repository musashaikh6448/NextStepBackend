export const feedbackAdminTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Feedback Notification</title>
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
        .rating-display {
            font-size: 16px;
            margin: 15px 0;
            text-align: center;
        }
        .detail-item {
            margin-bottom: 15px;
        }
        .detail-label {
            font-weight: bold;
            color: #333333;
        }
        .message-box {
            padding: 15px;
            background-color: #f8f8f8;
            border-left: 3px solid #d0d0d0;
            margin: 15px 0;
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
            <h2>New Feedback Received</h2>
        </div>
        <div class="content">
            <div class="rating-display">
                <strong>Rating:</strong> ${data.rating} out of 5
            </div>
            <div class="detail-item">
                <div class="detail-label">Name</div>
                <div>${data.name}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Email</div>
                <div>${data.email}</div>
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
            <p>© ${new Date().getFullYear()} NextStep. All rights reserved.</p>
            <p>Nanded, Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;

export const feedbackUserTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback</title>
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
        .rating-display {
            font-size: 16px;
            margin: 15px 0;
            text-align: center;
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
            <h2>Thank You for Your Feedback</h2>
        </div>
        <div class="content">
            <p>Dear ${data.name},</p>
            
            <div class="rating-display">
                <p>We appreciate you taking the time to rate us ${data.rating} out of 5.</p>
            </div>
            
            <div class="message-box">
                <p><strong>Your feedback:</strong></p>
                <p>${data.message}</p>
            </div>
            
            <p>Your feedback is valuable to us and will help us improve our services.</p>
            
            <div class="detail-item">
                <p><strong>What happens next?</strong></p>
                <ul>
                    <li>Our team will review your feedback</li>
                    <li>We'll use your suggestions to improve our services</li>
                    <li>If needed, we may contact you for more information</li>
                </ul>
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