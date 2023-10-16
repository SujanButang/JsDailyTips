import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen text-white bg-black w-full flex flex-col items-center justify-center px-10">
        <span className="text-hero font-bold ">DAILIFY</span>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-10 text-paragraph">
            <Link href="#">
              <li>Features</li>
            </Link>
            <Link href="#">
              <li>About</li>
            </Link>
            <Link href="#">
              <li>Faq</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex md:flex-row flex-col md:min-h-[500px] min-h-[350px] gap-10 my-10 px-10 w-full">
        <div className="flex items-center justify-center md:w-[50%] w-full">
          <span className="text-header font-bold md:w-[70%] w-full md:text-left text-center">
            Daily Dose of JavaScript Wisdom
          </span>
        </div>
        <div className="flex items-center justify-center md:w-[50%] w-full">
          <span className="text-paragraph md:w-[70%] w-full md:text-left text-center">
            Want to supercharge your JavaScript skills? Join our wild world of
            in-depth tips, tricks, and insights, delivered right to your inbox
            every day!
          </span>
        </div>
      </div>
      <div class="min-h-screen bg-[url('/prowess.jpg')] w-full bg-cover relative flex items-center justify-center">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <span className="text-hero text-white font-bold z-[999] w-[75%] text-center">
          Skyrocket your JavaScript prowess.
        </span>
      </div>
      <div className="flex flex-col my-20 gap-5 px-10">
        <span className="text-header font-bold w-[100%] md:text-left text-center">
          Curated Content
        </span>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-5 w-full">
          <Card className="bg-gray-100">
            <Image
              src="/tips.jpg"
              alt="tips"
              height={500}
              width={500}
              className=""
            />
          </Card>
          <div className="flex flex-col gap-5 items-start md:w-[40%] w-full">
            <div className=" flex flex-col w-full ">
              <span className="text-header font-bold my-2">Tailored Tips</span>
              <p className="md:w-[80%] w-full text-paragraph">
                Hand-picked to match yout need, ensuring every tip is
                ultra-relevant.
              </p>
            </div>
            <div className=" flex flex-col ">
              <span className="text-header font-bold my-2">Fun Factoids</span>
              <p className="md:w-[80%] w-full text-paragraph">
                Learn fascinating trivia about your favorite JavaScript language
                while you level up your skills.
              </p>
            </div>
            <div className=" flex flex-col ">
              <span className="text-header font-bold my-2">Expert Advice</span>
              <p className="md:w-[80%] w-full text-paragraph">
                Get valuable insights from coding gurus and industry
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1  items-center justify-center md:px-32 px-10 gap-10 md:my-20 my-10">
        <Card className="bg-gray-100">
          <CardTitle className="p-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardContent className="px-10">
            <p>
              I can’t believe how much I’ve improved since using JavaScript Tips
              Daily!
            </p>
          </CardContent>
          <CardFooter className="px-10 pt-10">
            <p className="text-[12px]">Sarah Johnson</p>
          </CardFooter>
        </Card>
        <Card className="bg-gray-100">
          <CardTitle className="p-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardContent className="px-10">
            <p>
              These JavaScript tips saved my life during a high-pressure
              deadline!
            </p>
          </CardContent>
          <CardFooter className="px-10 pt-10">
            <p className="text-[12px]">Sarah Johnson</p>
          </CardFooter>
        </Card>
        <Card className="bg-gray-100">
          <CardTitle className="p-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardContent className="px-10">
            <p>
              The mix of tips, trivia, and expert insights is the perfect way to
              start my day.
            </p>
          </CardContent>
          <CardFooter className="px-10 pt-10">
            <p className="text-[12px]">Sarah Johnson</p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-screen min-h-[30vw] flex items-center justify-center px-10">
        <div className="flex flex-col w-full h-full items-center justify-center gap-10">
          <span className="font-bold md:w-[80%] w-full text-banner text-center">
            Ready to hop on this rollercoaster ride of daily euphoria? Join us
            now!
          </span>
          <div className="flex items-center justify-center gap-5">
            <Modal trigger="Sign Up Now" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between md:px-32 px-10 my-10 w-full min-h-[100px] ">
        <span>© 2023 Dailify All rights reserved.</span>
        <span className="flex items-center justify-center gap-10">
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </span>
      </div>
    </main>
  );
}
