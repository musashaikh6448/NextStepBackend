export const adminContactTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry</title>
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
        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 25px 0;
        }
        .detail-item {
            background: #f9fafb;
            padding: 15px;
            border-radius: 8px;
        }
        .detail-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
            display: block;
        }
        .detail-value {
            color: #4b5563;
            word-break: break-word;
        }
        .message-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            margin-top: 25px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f3f4f6;
            color: #64748b;
            font-size: 0.9em;
        }
        @media (max-width: 600px) {
            .details-grid {
                grid-template-columns: 1fr;
            }
            .header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://next-step-kappa-murex.vercel.app/assets/darkLogo-removebg-preview-CegAW90k.png" 
                 alt="Company Logo" class="logo">
            <h1>New Inquiry Received</h1>
            <p style="margin-top: 8px;">${data.subject}</p>
        </div>
        
        <div class="content">
            <div class="details-grid">
                <div class="detail-item">
                    <span class="detail-label">Name</span>
                    <span class="detail-value">${data.name}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Email</span>
                    <span class="detail-value">${data.email}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Inquiry Type</span>
                    <span class="detail-value">${data.inquiryType}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Inquiry Type</span>
                    <span class="detail-value">${data.subject}</span>
                </div>
            </div>
            
            <div class="message-box">
                <span class="detail-label">Message</span>
                <div class="detail-value">${data.message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 NextStep - Your Future Starts Here. </p>
            <p>Nanded Maharashtra 431605</p>
        </div>
    </div>
</body>
</html>
`;
