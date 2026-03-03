"use client";

import { useState, FormEvent } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <div className="py-40 relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="teal"
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h1>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              We&apos;d Love to Hear From You
            </p>
            <p className="mt-4 text-lg text-neutral-400">
              Have questions about our courses, webinars, or anything else?
              Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 rounded-2xl p-6 sm:p-10 shadow-xl border border-zinc-800 space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-500 transition duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center text-neutral-500 text-sm">
            <p>
              Or reach us directly at{" "}
              <a
                href="mailto:support@musicnext.com"
                className="text-teal-500 hover:underline"
              >
                support@musicnext.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
