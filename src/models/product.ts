import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The product must have a name'],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, 'The product must have a slug'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'The product must have a description'],
    unique: true,
  },
  price: { type: Number, required: [true, 'A tour must have a price'] },
  image: {
    type: String,
    required: [true, 'The product must have a image'],
    unique: true,
  },
  spicy: {
    type: Boolean,
    default: false,
    required: [false, 'Confirm if the product is spicy'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
