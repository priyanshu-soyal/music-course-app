import courseData from "@/data/musicCourses.json";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  image: string;
  isFeatured: boolean;
}

export default function CoursesPage() {
  const allCourses = courseData.Courses;

  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02] ">
      <div className="py-40 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              All Courses
            </h1>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Explore Our Music Courses
            </p>
            <p className="mt-4 max-w-2xl text-lg text-neutral-400 mx-auto">
              Browse through our comprehensive collection of music courses
              designed to help you master your craft at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {allCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={400}
                    width={400}
                    className="object-contain rounded-lg"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                    Instructor: {course.instructor}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full pl-4 pr-4 py-1 text-white bg-black text-xs font-bold dark:bg-zinc-800 hover:bg-zinc-700 transition duration-200"
                    >
                      Learn More
                    </Link>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-1 text-white">
                      ${course.price}
                    </span>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
