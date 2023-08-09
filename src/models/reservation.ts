import mongoose, { Document, model, Model, Schema } from 'mongoose';

const ReservationSchema = new Schema({
  time: {
    type: String,
    required: [true, 'The product must have a name'],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'The product must have a slug'],
    unique: true,
  },
  lastName: {
    type: String,
    required: [true, 'The product must have a description'],
    unique: true,
  },
  partySize: { type: Number, required: [true, 'A tour must have a price'] },
  email: {
    type: String,
    required: [true, 'The product must have a image'],
    unique: true,
  },

  date: {
    type: Date,
    required: [true, 'Confirm if the product is spicy'],
  },
});

export default mongoose.models.Reservations ||
  mongoose.model('Reservations', ReservationSchema);
