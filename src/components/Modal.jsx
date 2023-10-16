"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { toast } from "./ui/use-toast";
import { Label } from "./ui/label";
import { LoadingButton } from "./LoadingButton";

export function Modal({ trigger }) {
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [OTPReceived, setOTPReceived] = useState("");
  const [open, setOpen] = useState();
  const [loading, setLoading] = useState(false);

  const generateOTP = async () => {
    setLoading(true);
    const res = await axios.post("/api/generateOTP", {
      email: email,
      cache: "no store",
    });
    if (res.data === "-1") {
      setLoading(false);
      toast({
        title: "Uh oh! Something went wrong! ",
        variant: "destructive",
        description: "The email you provided is already subscribed!",
      });
    } else {
      setOTP(res.data);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (parseInt(OTP) === parseInt(OTPReceived)) {
      setLoading(true);
      const res = await axios.post("/api/register", { email });

      if (res.status === 200) {
        setLoading(false);
        toast({
          title: "Success🎉🎉",
          description:
            "You have successfully signed up. You will start getting JS tips daily.",
        });
        setOpen(false);
      }
    } else {
      setLoading(false);
      toast({
        title: "Uh oh! Something went wrong! ",
        vaiant: "destructive",
        description: "Invalid Verification Key",
      });
    }
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button>{trigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            JS Tips Subscription
          </DialogTitle>
          {OTP !== "" ? (
            <DialogDescription className="text-center">
              A verification code has been sent to your email account. Enter the
              code below to veify its you.
            </DialogDescription>
          ) : (
            <DialogDescription className="text-center">
              Enter your email to start receiving daily JavaScript tips. We'll
              send you a verification code for security. Let's enhance your
              JavaScript knowledge! 🚀📚{" "}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {OTP === "" ? (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                defaultValue="johndoe@gmail.com"
                className="col-span-3"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="otp" className="text-right">
                Verification Key
              </Label>
              <Input
                id="otp"
                type="number"
                className="col-span-3"
                onChange={(e) => setOTPReceived(e.target.value)}
              />
            </div>
          )}
        </div>

        <DialogFooter>
          {OTP === "" ? (
            loading ? (
              <LoadingButton />
            ) : (
              <Button onClick={() => generateOTP()}>Continue</Button>
            )
          ) : loading ? (
            <LoadingButton />
          ) : (
            <Button onClick={() => handleSubmit()}>Submit</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
