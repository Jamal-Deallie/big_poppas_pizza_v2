import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/product';
import { IProduct } from '@/lib/types';
import { connectToDatabase } from '@/lib/database';

connectToDatabase();

export async function GET(req: NextRequest): Promise<Response> {
  try {
    const products = await Product.find();
    return NextResponse.json({ products, status: 204 });
  } catch (e) {
    return NextResponse.json({ status: 500, error: e });
  }
}
