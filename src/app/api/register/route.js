import user from "@/models/user";
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

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
      sendgrid.setApiKey(process.env.SG_API_KEY);
      const msg = {
        to: email, // Change to your recipient
        from: process.env.SENDER,
        subject: "Subscription Success",
        html: `<pre>
        <h2>$Thank you for subscribing to this service</h2>
        
        
        </pre>
        <br/>
        <br/>
        <p>You can stop getting messages by clicking on 
        <a href='${process.env.baseURL}/unsubscribe/${user.email}'>
        UNSUBSCRIBE.
        </a>
        </p>`,
      };
      await sendgrid
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });
      return new NextResponse(
        JSON.stringify("User registered successfully! 😁")
      );
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
