import Contact from '../models/Contact.js';
import { adminContactTemplate } from '../templates/adminContactTemplate.js';
import { userContactTemplate } from '../templates/userContactTemplate.js';
import { sendContactEmails } from '../utils/emailHandler.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message, inquiryType } = req.body;

    const newContact = new Contact({ 
      name, 
      email, 
      subject, 
      message, 
      inquiryType 
    });
    await newContact.save();

    res.status(201).json({ success: true });

    sendContactEmails({
      adminTemplate: adminContactTemplate,
      userTemplate: userContactTemplate,
      data: { name, email, subject, message, inquiryType },
      adminSubject: `New Inquiry: ${subject}`,
      userSubject: 'Thank You for Your Inquiry',
    }).catch((err) => {
      console.error('Error sending contact emails:', err);
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Server error' 
    });
  }
};
