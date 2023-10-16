import user from "@/models/user";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body;
    await connectMongoDB();
    console.log(email)
    await user.findOneAndDelete({ email: email });
    return new NextResponse(
      JSON.stringify("You have unsubscribed from our mailing service!"),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
