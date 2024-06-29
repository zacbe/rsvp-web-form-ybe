import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {

    const body = await req.json();
    console.log(body);
    // let lessons = body?.lessons?.length !== 0 ? body.lessons : null;
    // const [err, challengeId] = await on(insertOne(body))
    // if (err) throw new Error("Error while creating")

    // if (lessons) {
    //   const filter = { _id: { $in: lessons.map(nativeId) } }
    //   const update = { $push: { challenges: challengeId } }
    //   const [err,] = await on(updateMany(filter, update))
    //   if (err) throw new Error("Error while updating lessons")
    // }

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lesson' }, { status: 500 });
  }
}