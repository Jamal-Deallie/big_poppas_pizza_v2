import { connect, connection } from 'mongoose';
import Product from '@/models/product';
import { IProduct } from '@/types';

const { MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost' } =
  process.env;

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    connect(MONGODB_URI, options);
  }
};

export async function closeDatabase() {
  await connection.close();
}

export async function getCategoryProducts(
  category: string,
  maxNumberToPrint: number = 20
): Promise<IProduct[]> {
  connectToDatabase();

  const pipeline = [
    {
      $match: {
        category: category,
      },
    },
    {
      $limit: maxNumberToPrint,
    },
  ];

  const res = await Product.aggregate(pipeline);
  return res;
}
