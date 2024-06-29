import { NextResponse } from 'next/server';

const webhook = process.env.WEBHOOK_BASE_URL!;
const apikey = process.env.WEBHOOK_API_KEY!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = new URL(webhook);
    url.searchParams.set('auth', apikey);

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });


    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }
    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}