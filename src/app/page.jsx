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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen text-white bg-black w-full flex flex-col items-center justify-center px-10">
        <span className="text-hero font-bold ">DAILIFY</span>
        <nav className="flex items-center justify-center">
          <ul className="flex gap-10">
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
      <div className="flex md:flex-row flex-col min-h-[500px] gap-10 my-10">
        <div className="flex items-center justify-center w-[50%]">
          <span className="text-[36px] font-bold w-[70%]">
            Daily Dose of Programming Wisdom
          </span>
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <span className="text-[20px] w-[70%]">
            Want to supercharge your coding skills? Join our wild world of
            in-depth tips, tricks, and insights, delivered right to your inbox
            every day!
          </span>
        </div>
      </div>
      <div class="min-h-screen bg-[url('/prowess.jpg')] w-full bg-cover relative flex items-center justify-center">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <span className="text-[86px] text-white font-bold z-[999] w-[75%] text-center">
          Skyrocket your coding prowess.
        </span>
      </div>
      <div className="flex flex-col my-20 gap-5">
        <span className="text-[36px] font-bold w-[100%] px-20">
          Curated Content
        </span>
        <div className="flex items-center justify-center gap-20">
          <Card className="bg-gray-100">
            <Image
              src="/tips.jpg"
              alt="tips"
              height={500}
              width={500}
              className=""
            />
          </Card>
          <div className="flex flex-col gap-5 items-start w-[40%]">
            <div className=" flex flex-col ">
              <span className="text-[24px] font-bold my-2">Tailored Tips</span>
              <p className="w-[80%]">
                Hand-picked to match your language of choice, ensuring every tip
                is ultra-relevant.
              </p>
            </div>
            <div className=" flex flex-col ">
              <span className="text-[24px] font-bold my-2">Fun Factoids</span>
              <p className="w-[80%]">
                Learn fascinating trivia about your favorite programming
                languages while you level up your skills.
              </p>
            </div>
            <div className=" flex flex-col ">
              <span className="text-[24px] font-bold my-2">Expert Advice</span>
              <p className="w-[80%]">
                Get valuable insights from coding gurus and industry
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-32 gap-10 my-20">
        <Card className="bg-gray-100">
          <CardTitle className="p-10">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardContent className="px-10">
            <p>
              I can’t believe how much I’ve improved since using Programming
              Tips Daily!
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
              These coding tips saved my life during a high-pressure deadline!
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
      <div className="w-screen min-h-[30vw] flex items-center justify-center">
        <div className="flex flex-col w-full h-full items-center justify-center gap-10">
          <span className="text-[56px] font-bold w-[80%] text-center">
            Ready to hop on this rollercoaster ride of daily euphoria? Join us
            now!
          </span>
          <div className="flex items-center justify-center gap-5">
            <Button>Sign Up Today</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
