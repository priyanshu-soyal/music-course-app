import { Zen_Dots, Baumans } from "next/font/google";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const baumans = Baumans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function HeroSection() {
  return (
    <section className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className={`${zenDots.className} text-4xl mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400`}
        >
          Master the art of music
        </h1>
        <p
          className={`${baumans.className} mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto `}
        >
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or an looking to refine your
          skills, join us to unlock your full potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
