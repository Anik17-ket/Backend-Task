import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      uppercase: true
    },
    age: {
      type: Number,
      required: true,
      min: 18
    },
    city: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      required: true
    },
    lastDonationDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Donor = mongoose.model('Donor', donorSchema);

export default Donor;
