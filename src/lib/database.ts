import { connect, connection } from 'mongoose';
import Product from '@/models/product';
import { IProduct, IProductResponse } from '@/types';

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

type PipelineStage =
  | {
      $search: {
        index: string;
        text: {
          query: string;
          fuzzy: {};
          path: {
            wildcard: string;
          };
        };
      };
    }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    };

export async function getProducts({
  query,
  page = 1,
  limit = 10,
}: {
  query?: string;
  page: number;
  limit: number;
}) {
  connectToDatabase();
  //i.e. (1 - 1) * 20 = 0
  const skip = (page - 1) * limit;
  const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

  if (query) {
    pipeline.unshift({
      $search: {
        index: 'search',
        text: {
          query,
          fuzzy: {
            maxEdits: 1,
            prefixLength: 3,
            maxExpansions: 50,
          },
          path: {
            wildcard: '*',
          },
        },
      },
    });
  }
  const products = await Product.aggregate(pipeline);

  return products;
}
