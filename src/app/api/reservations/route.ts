import { connectToDatabase } from '@/lib/database';
import { NextRequest, NextResponse } from 'next/server';
import Reservations from '@/models/reservation';

connectToDatabase();
export async function POST(req: NextRequest): Promise<Response> {
  const items = await req.json();

  try {
    console.log(items);
    const reservation = await Reservations.create(items);
    return NextResponse.json({ status: 204, success: true, data: reservation });
  } catch (e) {
    console.error(e);

    return NextResponse.json({ status: 400, success: false });
  }
}
