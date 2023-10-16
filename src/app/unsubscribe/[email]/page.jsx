"use client";

import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const pathname = usePathname();
  const email = pathname.split("/")[2];
  useEffect(() => {
    async function deleteUser() {
      const res = await axios.post("/api/unsubscribe", { email });
      if (res.status === 200) {
        toast({
          title: "Unsubscribed ☹️☹️",
          description:
            "We'll always be here with open arms if you change your mind!",
        });
      }
    }
    deleteUser();
  }, []);
  return (
    <div className="min-h-screen bg-black w-full flex flex-col gap-10 text-white md:px-32 px-10 items-center justify-center text-center">
      <span className="text-header font-bold">Oh No, You're Leaving?</span>
      <p className="text-paragraph leading-10">
        It's a bittersweet moment when a valued visitor like yourself decides to
        unsubscribe from our amazing world. Your decision breaks our hearts, but
        we respect your choice. Just know, we'll always be here with open arms
        if you change your mind!
      </p>
    </div>
  );
};

export default page;
