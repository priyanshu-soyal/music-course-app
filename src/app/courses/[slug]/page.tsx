import courseData from "@/data/musicCourses.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
  return courseData.Courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courseData.Courses.find((c: Course) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <div className="py-40 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <Link
              href="/courses"
              className="text-teal-500 hover:text-teal-400 text-sm transition duration-200"
            >
              &larr; Back to All Courses
            </Link>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-800">
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {course.title}
                </h1>
                {course.isFeatured && (
                  <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-sm">Instructor:</span>
                  <span className="text-white text-sm font-medium">
                    {course.instructor}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-sm">Price:</span>
                  <span className="text-teal-400 text-lg font-bold">
                    ${course.price}
                  </span>
                </div>
              </div>

              <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-500 transition duration-200">
                Enroll Now - ${course.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
