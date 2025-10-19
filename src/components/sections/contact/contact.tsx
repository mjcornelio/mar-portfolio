"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_7typs0f",
        "template_814o7oi",
        form.current,
        "b9bAVFPh2tFKw8uNc"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <section className="text-gray-200" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl text-primary dark:text-gray-200 font-semibold mb-6 mt-12"
      >
        Let's Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="w-[90vw] max-w-md border border-gray-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-xl dark:shadow-white/5 mx-auto mt-10">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <Mail className="w-5 h-5 text-primary" />
              Send me a message
            </CardTitle>
          </CardHeader>

          <form ref={form} onSubmit={sendEmail}>
            <CardContent className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="block text-sm mb-1 font-medium">Name</label>
                <Input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Juan Dela Cruz"
                  className="bg-transparent border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <label className="block text-sm mb-1 font-medium">Email</label>
                <Input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="juandelacruz@gmail.com"
                  className="bg-transparent border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-primary"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-sm mb-1 font-medium">
                  Message
                </label>
                <Textarea
                  name="message"
                  rows={20}
                  required
                  placeholder="Write your message..."
                  className="bg-transparent border-gray-300 dark:border-white/10 focus:ring-2 focus:ring-primary resize-none"
                />
              </motion.div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <motion.div whileTap={{ scale: 0.97 }} className="w-full">
                <Button
                  type="submit"
                  variant="default"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white hover:opacity-90 dark:hover:bg-primary/90 transition-all mt-5"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </Button>
              </motion.div>

              {status === "success" && (
                <p className="text-green-500 text-sm text-center">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  ❌ Failed to send. Try again.
                </p>
              )}
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}
