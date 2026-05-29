import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true },
    phone:   { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: '' },
    assist:  { type: String, trim: true, default: '' },
    status:  { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
    read:    { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);
