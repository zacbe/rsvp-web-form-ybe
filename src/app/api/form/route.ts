import { NextResponse } from 'next/server';

const webhook = process.env.WEBHOOK_BASE_URL!;
const apikey = process.env.WEBHOOK_API_KEY!;

export async function POST(req: Request) {
  try {

    if (!webhook || !apikey) {
      console.error({ webhook, apikey })
      throw new Error('Missing webhook or apikey');
    }

    const body = await req.json();
    const url = new URL(webhook);
    url.searchParams.set('auth', apikey);

    console.info('Sending webhook to:', url.toString());

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
    console.error('Failed to submit form:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}