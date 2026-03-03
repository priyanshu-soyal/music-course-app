"use client";

import { Zen_Dots } from "next/font/google";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const projects = [
  {
    title: "Beginner Guitar Masterclass",
    description:
      "Learn essential chords, strumming patterns, and how to play your first songs with confidence in this live beginner-friendly session.",
    link: "/webinars/guitar-masterclass",
  },
  {
    title: "Vocal Training Fundamentals",
    description:
      "Discover breathing techniques, pitch control, and warm-ups used by professional singers to improve tone and vocal strength.",
    link: "/webinars/vocal-fundamentals",
  },
  {
    title: "Music Theory Made Simple",
    description:
      "Understand scales, chords, rhythm, and song structure in a practical way that helps you play and compose better music.",
    link: "/webinars/music-theory",
  },
  {
    title: "Home Recording for Musicians",
    description:
      "Learn how to record high-quality vocals and instruments at home using basic equipment and simple production techniques.",
    link: "/webinars/home-recording",
  },
  {
    title: "Live Performance Confidence Workshop",
    description:
      "Build stage presence, overcome performance anxiety, and learn how to engage your audience during live shows.",
    link: "/webinars/performance-confidence",
  },
  {
    title: "Songwriting Essentials",
    description:
      "Explore melody writing, lyric ideas, and song structure techniques to start creating your own original music.",
    link: "/webinars/songwriting",
  },
];

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600  font-semibold tracking-wide uppercase ">
            Featured Webinars
          </h2>
          <p
            className={`${zenDots.className} mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl`}
          >
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={projects} />
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-gray-100 bg-black hover:bg-gray-100 hover:text-gray-900 transition duration-200"
          >
            View all webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
