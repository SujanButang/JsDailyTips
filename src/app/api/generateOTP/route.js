import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { connectMongoDB } from "@/utils/mongodb";
import user from "@/models/user";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;
    await connectMongoDB();
    const emailExists = await user.findOne({ email: email });
    if (emailExists) {
      return new NextResponse(
        JSON.stringify("-1"),
        { status: 200 }
      );
    }
    const min = 1000; // Minimum 4-digit number (1000)
    const max = 9999; // Maximum 4-digit number (9999)

    // Generate a random number between min and max
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    sendgrid.setApiKey(process.env.SG_API_KEY);

    const msg = {
      to: email,
      from: process.env.SENDER,
      subject: "Email Verification",
      text: `Your verification code is ${otp}`,
    };
    sendgrid
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return new NextResponse(JSON.stringify(otp, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
