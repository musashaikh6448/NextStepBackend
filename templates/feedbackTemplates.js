// Admin Template
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
        .rating-box {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .rating-stars {
            display: flex;
            gap: 5px;
            justify-content: center;
        }
        .star {
            color: ${data.rating >= 3 ? "#FFD700" : "#FF4500"};
            font-size: 20px;
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
                <div class="detail-value">${data.name}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Email</div>
                <div class="detail-value">${data.email}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Subject</div>
                <div class="detail-value">${data.subject}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Message</div>
                <div class="detail-value">${data.message}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Additional Notes</div>
                <ul style="padding-left: 15px; color: #333;">
                    <li>User provided valuable insights that can help improve our services.</li>
                    <li>This feedback has been categorized as a priority based on its rating.</li>
                    <li>Consider reaching out to the user for further clarification if needed.</li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <p>&copy; 2024 NextStep - Your Future Starts Here</p>
            <p>Nanded, Maharashtra 431605</p>
            <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">
                This is an automated message. Please do not reply directly to this email.
                For any urgent matters, contact us at
                <a href="mailto:${process.env.ADMIN_EMAIL}" style="color: #6366f1; text-decoration: underline;">${process.env.ADMIN_EMAIL}</a>.
            </p>
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
    <title>Thank You for Your Feedback!</title>
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
        .rating-box {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
        }
        .rating-stars {
            display: flex;
            justify-content: center;
            gap: 5px;
        }
        .star {
            color: ${data.rating >= 3 ? "#FFD700" : "#FF4500"};
            font-size: 20px;
        }
        .message-box {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You, ${data.name}!</h1>
            <p>We appreciate your feedback</p>
        </div>
        <div class="content">
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
                <p>"${data.message}"</p>
            </div>
            <p>We'll use your feedback to improve our services and reach out if needed.</p>
            <div class="detail-item">
                <div class="detail-label">What's Next?</div>
                <ul style="padding-left: 15px; color: #333;">
                    <li>Your feedback has been recorded and will be reviewed by our team.</li>
                    <li>If follow-up is required, we'll reach out to you via email within 48 hours.</li>
                </ul>
            </div>
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
