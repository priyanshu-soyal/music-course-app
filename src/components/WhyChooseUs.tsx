"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn from Professional Musicians",
    description:
      "Our courses are taught by experienced musicians and industry professionals who bring real-world knowledge into every lesson. Gain practical skills, performance insights, and mentorship that helps you grow faster as a musician.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Expert Mentors
      </div>
    ),
  },
  {
    title: "Interactive Online Classes",
    description:
      "Join engaging live sessions, get instant feedback, and interact with instructors and fellow learners. Our platform makes online music learning feel personal, dynamic, and motivating.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="online music lesson"
        />
      </div>
    ),
  },
  {
    title: "Structured Courses for All Levels",
    description:
      "Whether you're a complete beginner or an advanced player, our step-by-step curriculum helps you progress confidently. Master fundamentals, techniques, and performance skills at your own pace.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="guitar learning"
        />
      </div>
    ),
  },
  {
    title: "Performance & Certification",
    description:
      "Showcase your talent through student showcases, assessments, and certifications. Build confidence, track your growth, and earn credentials that reflect your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="music performance stage"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full py-1">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
