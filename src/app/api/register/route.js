import user from "@/models/user";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;
    await connectMongoDB();
    const newUser = new user({
      email: email,
    });
    const saveUser = await newUser.save();
    if (saveUser) {
      return new NextResponse(
        JSON.stringify("User registered successfully! 😁")
      );
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
