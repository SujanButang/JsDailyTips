import js from "@/models/js";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import user from "@/models/user";

export async function GET(req) {
  try {
    const baseUrl = process.env.baseURL; // Assuming baseURL is set correctly
    if (!baseUrl) {
      throw new Error("baseURL is not defined in environment variables.");
    }

    const apiUrl = new URL("/api/mail", baseUrl).toString();
    // ...
  } catch (error) {
    console.error("URL construction error:", error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectMongoDB();
    const totalData = await js.countDocuments();
    const users = await user.find({});
    const emailPromises = users.map(async (user) => {
      const randomIndex = Math.floor(Math.random() * totalData);
      const tip = await js.findOne().skip(randomIndex).exec();
      sendgrid.setApiKey(process.env.SG_API_KEY);
      const msg = {
        to: user.email,
        from: process.env.SENDER,
        subject: "Tip of the day",
        html: `<pre>
        <h2>${tip.title}</h2>
        ${tip.content}
        </pre>
        <br/>
        <br/>
        <p>You can stop getting this message by clicking 
        <a href='${process.env.baseURL}/unsubscribe/${user.email}'>
        UNSUBSCRIBE.
        </a>
        </p>`,
      };
      return await sendgrid.send(msg);
    });

    await Promise.all(emailPromises); // Wait for all email promises to resolve

    console.log("All emails sent successfully");
    return new NextResponse(JSON.stringify("Emails sent successfully!"), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
