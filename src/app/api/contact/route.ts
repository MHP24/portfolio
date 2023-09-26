import { NextResponse } from 'next/server';
import { regex } from '@/app/utls';
import { notify } from '@/app/lib';

export async function POST(req: Request) {
  try {
    const { subject = '', email = '', message = '' } = await req.json();

    if (!email.match(regex.email) || !subject || !message) {
      return NextResponse.json({
        error: 'Invalid fields'
      }, { status: 400 });
    }

    const notification = await notify(email, subject, message);

    if (!notification) {
      return NextResponse.json({
        error: 'Failed sending message'
      }, { status: 503 });
    }

    return NextResponse.json({
      message: 'Message sent successfully'
    }, { status: 200 });


  } catch (error) {
    return NextResponse.json({
      error: 'Internal server error'
    }, { status: 500 });
  }
}