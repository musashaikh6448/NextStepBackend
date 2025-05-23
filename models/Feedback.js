import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  rating: { 
    type: Number, 
    min: 1,
    max: 5,
    required: true 
  }
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);