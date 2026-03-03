"use client";
import { div } from "motion/react-client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Aarav Mehta",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Rohan Iyer",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Simran Kaur",
    designation: "Music Theory Specialist",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Kabir Shah",
    designation: "Music Production Mentor",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Anjali Verma",
    designation: "Performance Coach",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
];

function MeetOurInstructors() {
  return (
    <div className="relative h-180 overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Discover the talented instructors who will guide you on your musical
          journey.
        </p>
        <div className="flex flex-row items-center justify-center mt-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default MeetOurInstructors;
