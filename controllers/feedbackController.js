import Feedback from '../models/Feedback.js';
import { sendContactEmails } from '../utils/emailHandler.js';
import { feedbackAdminTemplate, feedbackUserTemplate } from '../templates/feedbackTemplates.js';

export const submitFeedbackForm = async (req, res) => {
  try {
    const { name, email, subject, message, rating } = req.body;

    // Save to database
    const newFeedback = new Feedback({ 
      name, 
      email, 
      subject, 
      message, 
      rating 
    });
    await newFeedback.save();

    // Send emails using the generic handler
    await sendContactEmails({
      adminTemplate: feedbackAdminTemplate,
      userTemplate: feedbackUserTemplate,
      data: { name, email, subject, message, rating },
      adminSubject: `New Feedback: ${subject} [Rating: ${rating}/5]`,
      userSubject: 'Thank You for Your Feedback!',
    });

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Server error' 
    });
  }
};