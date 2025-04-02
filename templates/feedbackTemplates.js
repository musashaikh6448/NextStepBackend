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
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            background-color: #f3f4f6;
        }
        .email-container {
            max-width: 680px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(90deg, #6366f1, #7c3aed);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            width: 150px;
            margin-bottom: 15px;
        }
        .content {
            padding: 30px;
        }
        .rating-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .rating-stars {
            display: flex;
            gap: 5px;
        }
        .star {
            color: ${data.rating >= 3 ? "#FFD700" : "#FF4500"};
            font-size: 24px;
        }
        .detail-item {
            background: #f9fafb;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f3f4f6;
            color: #64748b;
            font-size: 0.9em;
        }
        @media (max-width: 600px) {
            .header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://next-step-kappa-murex.vercel.app/assets/darkLogo-removebg-preview-CegAW90k.png" 
                 alt="Company Logo" class="logo">
            <h1>New Feedback Received</h1>
            <p>Rating: ${data.rating}/5</p>
        </div>

        <!-- Content -->
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
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${
                  data.email
                }" style="color: #6366f1; text-decoration: none;">${
  data.email
}</a></p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong></p>
                <p>"${data.message}"</p>
            </div>

            <div class="detail-item">
                <p><strong>Additional Notes:</strong></p>
                <ul style="padding-left: 15px; color: #4b5563;">
                    <li>User provided valuable insights that can help improve our services.</li>
                    <li>This feedback has been categorized as a priority based on its rating.</li>
                    <li>Consider reaching out to the user for further clarification if needed.</li>
                </ul>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>&copy; 2024 NextStep - Your Future Starts Here</p>
            <p>Nanded, Maharashtra 431605</p>
            <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">
                This is an automated message. Please do not reply directly to this email.
                For any urgent matters, contact us at 
                <a href="mailto:${process.env.ADMIN_EMAIL}" 
                   style="color: #6366f1; text-decoration: underline;">
                    ${process.env.ADMIN_EMAIL}</a>.
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
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            background-color: #f3f4f6;
        }
        .email-container {
            max-width: 680px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(90deg, #6366f1, #7c3aed);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            width: 150px;
            margin-bottom: 15px;
        }
        .content {
            padding: 30px;
        }
        .rating-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        }
        .rating-stars {
            display: flex;
            justify-content: center;
            gap: 5px;
        }
        .star {
            color: ${data.rating >= 3 ? "#FFD700" : "#FF4500"};
            font-size: 24px;
        }
        .message-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f3f4f6;
            color: #64748b;
            font-size: 0.9em;
        }
        @media (max-width: 600px) {
            .header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://next-step-kappa-murex.vercel.app/assets/darkLogo-removebg-preview-CegAW90k.png" 
                 alt="Company Logo" class="logo">
            <h1>Thank You, ${data.name}!</h1>
            <p>We appreciate your feedback</p>
        </div>

        <!-- Content -->
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
                <p><strong>What's Next?</strong></p>
                <ul style="padding-left: 15px; color: #4b5563;">
                    <li>Your feedback has been recorded and will be reviewed by our team.</li>
                    <li>If follow-up is required, we'll reach out to you via email within 48 hours.</li>
                   
                </ul>
            </div>
        </div>

        <!-- Footer -->
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
