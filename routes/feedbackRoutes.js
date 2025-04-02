import express from 'express';
import { submitFeedbackForm } from '../controllers/feedbackController.js';

const feedbackRoutes = express.Router();

feedbackRoutes.post('/feedback', submitFeedbackForm);

export default feedbackRoutes;