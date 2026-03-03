"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "I had never taken music lessons before, but the structured approach and supportive instructors made learning guitar feel natural. Within a few months I could play full songs with confidence.",
    name: "Rohit Sharma",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "The live feedback sessions completely changed how I practice. Small corrections from the mentor improved my vocal control more than years of singing on my own.",
    name: "Ananya Verma",
    title: "Vocal Training Student",
  },
  {
    quote:
      "What I love most is the balance between theory and performance. The lessons are clear, practical, and actually fun to follow. It never feels overwhelming.",
    name: "Karan Mehta",
    title: "Piano Course Learner",
  },
  {
    quote:
      "The online format is smooth and interactive. I can revisit lessons anytime, and the assignments keep me motivated to practice regularly.",
    name: "Sneha Kapoor",
    title: "Online Music Program Student",
  },
  {
    quote:
      "Performing in the student showcase boosted my confidence more than anything else. It felt like a real stage experience, even though I started as a complete beginner.",
    name: "Arjun Patel",
    title: "Performance Track Student",
  },
];

function TestimonialCards() {
  return (
    // <div className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    // </div>

    <div className="relative flex h-160 w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="h-160 w-full  dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
        <h2 className="text-3xl  font-bold text-center mb-8 z-10">
          Hear our Harmony : Voices of success
        </h2>
        <div className="flex w-full justify-center overflow-hidden px-2 sm:px-4 lg:px-6">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
