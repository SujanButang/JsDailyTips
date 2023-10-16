import user from "@/models/user";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const body = await req.json();

    // Check if the body is empty or not valid JSON
    if (!body) {
      throw new Error("Request body is empty or not valid JSON.");
    }

    const { email } = body;
    await connectMongoDB();
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
