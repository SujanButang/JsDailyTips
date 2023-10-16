import js from "@/models/js";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

export async function POST(req) {
  try {
    await connectMongoDB();
    const totalData = await js.countDocuments();
    const randomIndex = Math.floor(Math.random() * totalData);
    const tip = await js.findOne().skip(randomIndex).exec();
    sendgrid.setApiKey(process.env.SG_API_KEY);
    const msg = {
      to: "sujanbutang@gmail.com", // Change to your recipient
      from: process.env.SENDER,
      subject: "Tip of the day",
      html: `<pre>
      <h2>${tip.title}</h2>
        ${tip.content}
      </pre>`,
    };
    sendgrid
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    return new NextResponse(JSON.stringify("Email sent successfully!"), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
