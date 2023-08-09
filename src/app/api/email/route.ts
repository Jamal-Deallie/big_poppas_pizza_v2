import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '@/emails/Welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email } = await request.json();

  await resend.sendEmail({
    from: '<Your Email Address>',
    to: email,
    subject: 'hello world',
    react: WelcomeEmail({
      firstName,
    }),
  });

  return NextResponse.json({
    status: 'Ok',
  });
}
