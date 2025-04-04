export const feedbackAdminTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Feedback Received</title>
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
        .rating-box {
            text-align: center;
            margin-bottom: 20px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 4px;
        }
        .rating-stars {
            display: flex;
            gap: 5px;
            justify-content: center;
            margin: 10px 0;
        }
        .star {
            color: #f39c12;
            font-size: 20px;
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
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>New Feedback Received</h1>
            <p>Rating: ${data.rating}/5</p>
        </div>
        <div class="content">
            <div class="rating-box">
                <div class="rating-stars">
                    ${Array.from(
                      { length: data.rating },
                      (_, i) => `<span class="star">★</span>`
                    ).join("")}
                    ${Array.from(
                      { length: 5 - data.rating },
                      () => `<span class="star">☆</span>`
                    ).join("")}
                </div>
                <div>
                    <strong>${data.rating}/5</strong>
                </div>
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
            <div class="detail-item">
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


export const feedbackUserTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback</title>
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
        .rating-box {
            text-align: center;
            margin-bottom: 20px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 4px;
        }
        .rating-stars {
            display: flex;
            gap: 5px;
            justify-content: center;
            margin: 10px 0;
        }
        .star {
            color: #f39c12;
            font-size: 20px;
        }
        .message-box {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        .detail-item {
            margin-bottom: 15px;
        }
        .detail-label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You for Your Feedback</h1>
        </div>
        <div class="content">
            <h2>Hello ${data.name},</h2>
            <p>We appreciate you taking the time to share your experience with us.</p>
            
            <div class="rating-box">
                <p>Your rating:</p>
                <div class="rating-stars">
                    ${Array.from(
                      { length: data.rating },
                      (_, i) => `<span class="star">★</span>`
                    ).join("")}
                    ${Array.from(
                      { length: 5 - data.rating },
                      () => `<span class="star">☆</span>`
                    ).join("")}
                </div>
                <p><strong>${data.rating}/5</strong></p>
            </div>
            
            <div class="message-box">
                <p><strong>Your message:</strong></p>
                <p>${data.message}</p>
            </div>
            
            <p>We'll review your feedback carefully as we continue to improve our services.</p>
            
            <div class="detail-item">
                <div class="detail-label">Next Steps</div>
                <ul style="padding-left: 20px;">
                    <li>Your feedback has been recorded and will be reviewed by our team</li>
                    <li>If we need any clarification, we'll reach out to you</li>
                </ul>
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