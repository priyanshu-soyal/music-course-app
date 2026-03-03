"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const webinars = [
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
  {
    title: "Beat Making & Production",
    description:
      "Dive into digital music production, learning beat creation, sampling, and mixing using popular DAWs and free tools.",
    link: "/webinars/beat-making",
  },
  {
    title: "Jazz Improvisation Techniques",
    description:
      "Explore the art of jazz improvisation with practical exercises on scales, chord progressions, and creative spontaneity.",
    link: "/webinars/jazz-improvisation",
  },
  {
    title: "Music Business & Marketing",
    description:
      "Learn how to market your music, build a fanbase, and understand the business side of the music industry.",
    link: "/webinars/music-business",
  },
];

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <div className="py-40 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              All Webinars
            </h1>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Upcoming Live Webinars
            </p>
            <p className="mt-4 max-w-2xl text-lg text-neutral-400 mx-auto">
              Join our expert-led live sessions designed to level up your
              musical skills. Interactive, practical, and fun.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect items={webinars} />
          </div>
        </div>
      </div>
    </main>
  );
}
