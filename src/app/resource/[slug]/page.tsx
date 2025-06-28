"use client";

import { use, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { leadMagnets } from "@/types/shortlinks";
import { submitLeadMagnetForm } from "./actions";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export default function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const resourceData = leadMagnets[slug];
  if (!resourceData) {
    return (
      <main className="bg-background flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Resource not found</h1>
      </main>
    );
  }

  const {
    headline,
    subheadline,
    button,
    modalHeadline,
    image,
    name,
    subtitle,
    resource,
    emailCopy,
    subject,
    description,
    resourceName,
  } = resourceData;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitLeadMagnetForm({
        firstName: values.firstName,
        email: values.email,
        resource,
        emailCopy,
        subject,
        description,
        resourceName,
      });
      if (result.ok) {
        setIsSubmitted(true);
      } else {
        // Optionally handle error
        console.error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <BackgroundEffects />
      <Card
        className="relative z-10 w-full max-w-md rounded-2xl border-0 bg-white/95 p-8 shadow-2xl dark:bg-black/90"
        style={{
          boxShadow: "0 4px 32px 0 rgba(218,165,32,0.10), 0 1.5px 0 0 #FFD700",
        }}
      >
        <div className="flex flex-col items-center">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="mb-3 rounded-full border-2 border-zinc-200 bg-zinc-100 object-cover shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            priority
          />
          <div className="mb-1 text-xl font-bold text-red-600">{name}</div>
          <div className="mb-5 text-sm text-zinc-500">{subtitle}</div>
        </div>
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-2xl leading-tight font-extrabold text-black dark:text-white">
            {headline}
          </h1>
          <div className="mb-4 text-base text-zinc-800 dark:text-zinc-200">
            {subheadline}
          </div>
        </div>
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <Button
              className="group dark:bg-gradient-gold flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-colors duration-200 hover:bg-yellow-600 hover:text-black dark:text-black"
              disabled={isSubmitted}
            >
              {button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-md border-0 bg-white p-0 dark:bg-black">
            <div className="p-6">
              {!isSubmitted && (
                <h2 className="mb-6 text-center text-xl font-bold text-black dark:text-white">
                  {modalHeadline}
                </h2>
              )}
              {!isSubmitted ? (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(async (values) => {
                      await onSubmit(values);
                    })}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold text-black dark:text-white">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              className="h-12 rounded-lg border-zinc-300 bg-white/80 text-black placeholder:text-zinc-500 focus:border-yellow-500 focus:ring-yellow-500/20 dark:border-zinc-700 dark:bg-black/70 dark:text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold text-black dark:text-white">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                              className="h-12 rounded-lg border-zinc-300 bg-white/80 text-black placeholder:text-zinc-500 focus:border-yellow-500 focus:ring-yellow-500/20 dark:border-zinc-700 dark:bg-black/70 dark:text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="group dark:bg-gradient-gold flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition-colors duration-200 hover:bg-yellow-600 hover:text-black dark:text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : button}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
                      <CheckCircle className="h-7 w-7 text-green-500" />
                    </div>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
                    Thank You!
                  </h2>
                  <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                    The resource will be sent to your email shortly.
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </Card>
    </main>
  );
}
