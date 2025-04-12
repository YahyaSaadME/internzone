"use client";
import { Foot } from "@/components/Foot";
import { Nav } from "@/components/Nav";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 py-20 text-white dark:from-blue-800 dark:to-indigo-950">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-10">
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Find Your Dream Internship
                </h1>
                <p className="mb-8 text-xl text-blue-100">
                  Explore top internship opportunities across various industries
                  and locations. Start your career journey today!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/internships" passHref>
                    <Button
                      size="lg"
                      color="white"
                      className="text-blue-700 hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-white"
                    >
                      Browse Internships
                    </Button>
                  </Link>
                  <Link href="/signup" passHref>
                    <Button
                      size="lg"
                      color="light"
                      className="border border-white bg-transparent text-white hover:bg-white hover:text-blue-700 dark:hover:text-blue-800"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  width={500}
                  height={500}
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/internship-hero.png"
                  alt="Internship opportunities"
                  className="w-full rounded shadow-lg dark:shadow-blue-900/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Why Choose Us?
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                We connect students and professionals with the best internship
                opportunities tailored to their skills and interests.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border dark:border-gray-700 dark:bg-gray-700">
                <div className="flex flex-col items-center text-center">
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Top Companies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Partnered with leading companies to provide high-quality
                    internships.
                  </p>
                </div>
              </Card>
              <Card className="border dark:border-gray-700 dark:bg-gray-700">
                <div className="flex flex-col items-center text-center">
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Diverse Opportunities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Internships available in various fields like tech,
                    marketing, design, and more.
                  </p>
                </div>
              </Card>
              <Card className="border dark:border-gray-700 dark:bg-gray-700">
                <div className="flex flex-col items-center text-center">
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Career Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Gain real-world experience and boost your career prospects.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                Hear from students and professionals who found their dream
                internships through us.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border dark:border-gray-700 dark:bg-gray-800">
                <p className="text-gray-700 italic dark:text-gray-300">
                  &quot;This platform helped me land an amazing internship at a
                  top tech company. Highly recommend!&quot;
                </p>
                <p className="mt-4 font-bold text-gray-900 dark:text-gray-100">
                  - Sarah Johnson
                </p>
              </Card>
              <Card className="border dark:border-gray-700 dark:bg-gray-800">
                <p className="text-gray-700 italic dark:text-gray-300">
                  &quot;The diverse opportunities available made it easy for me
                  to find an internship that matched my skills.&quot;
                </p>
                <p className="mt-4 font-bold text-gray-900 dark:text-gray-100">
                  - James Wilson
                </p>
              </Card>
              <Card className="border dark:border-gray-700 dark:bg-gray-800">
                <p className="text-gray-700 italic dark:text-gray-300">
                  &quot;Thanks to this platform, I gained valuable experience
                  and kickstarted my career in marketing.&quot;
                </p>
                <p className="mt-4 font-bold text-gray-900 dark:text-gray-100">
                  - Emily Chen
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 py-16 text-white dark:from-blue-800 dark:to-indigo-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Start Your Career?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Sign up today and explore the best internship opportunities
              tailored for you.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/signup" passHref>
                <Button
                  size="lg"
                  color="white"
                  className="text-blue-700 dark:bg-white dark:hover:bg-gray-100"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/internships" passHref>
                <Button
                  size="lg"
                  color="light"
                  className="border border-white bg-transparent text-white hover:bg-white hover:text-blue-700 dark:hover:text-blue-800"
                >
                  Browse Internships
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Foot />
    </>
  );
}
