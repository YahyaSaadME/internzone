"use client";

import {
  Button,
  Card,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiOfficeBuilding,
  HiLocationMarker,
  HiCurrencyDollar,
  HiCalendar,
} from "react-icons/hi";
import { Nav } from "@/components/Nav";
import { Foot } from "@/components/Foot";

// Sample internship data
const INTERNSHIPS = [
  {
    id: 1,
    title: "Frontend Developer Internship",
    company: "TechStar Solutions",
    location: "Remote",
    duration: "3 months",
    stipend: "$1000/month",
    description:
      "Join our team to develop modern web applications using React, TypeScript and other cutting-edge technologies.",
    requirements: [
      "Knowledge of React",
      "Basic JavaScript understanding",
      "HTML/CSS skills",
    ],
    postedDate: "2023-06-01",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "New York, NY",
    duration: "6 months",
    stipend: "$1500/month",
    description:
      "Work with our data science team to analyze large datasets and build machine learning models.",
    requirements: [
      "Python programming",
      "Statistics knowledge",
      "Familiarity with ML concepts",
    ],
    postedDate: "2023-06-05",
  },
  {
    id: 3,
    title: "Marketing Associate Intern",
    company: "Brand Builders",
    location: "Chicago, IL",
    duration: "4 months",
    stipend: "$800/month",
    description:
      "Assist in creating and implementing digital marketing strategies for our clients.",
    requirements: [
      "Social media knowledge",
      "Good writing skills",
      "Marketing basics",
    ],
    postedDate: "2023-06-10",
  },
  {
    id: 4,
    title: "UI/UX Design Internship",
    company: "Creative Design Studios",
    location: "Remote",
    duration: "3 months",
    stipend: "$900/month",
    description:
      "Create user-centered designs for web and mobile applications. Work with design tools to create wireframes, prototypes and final designs.",
    requirements: [
      "Figma/Adobe XD",
      "Understanding of UI principles",
      "Portfolio of work",
    ],
    postedDate: "2023-06-12",
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Innovate Tech",
    location: "San Francisco, CA",
    duration: "6 months",
    stipend: "$2000/month",
    description:
      "Join our engineering team to build scalable backend systems and APIs using modern technologies.",
    requirements: [
      "Java/Python/Node.js experience",
      "API development",
      "Database knowledge",
    ],
    postedDate: "2023-06-15",
  },
];

export default function Page() {
  const [filter, setFilter] = useState({
    search: "",
    location: "",
    duration: "",
  });
  const [loading, setLoading] = useState(false);

  const filteredInternships = INTERNSHIPS.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      internship.company.toLowerCase().includes(filter.search.toLowerCase());
    const matchesLocation =
      filter.location === "" || internship.location === filter.location;
    const matchesDuration =
      filter.duration === "" || internship.duration === filter.duration;

    return matchesSearch && matchesLocation && matchesDuration;
  });

  // Get unique locations and durations for filters
  const locations = [...new Set(INTERNSHIPS.map((i) => i.location))];
  const durations = [...new Set(INTERNSHIPS.map((i) => i.duration))];

  const handleFilterChange = (name: string, value: string) => {
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
    <Nav/>
    <div className="container mx-auto px-4 py-8 mx-4">
      <div className="mb-8"></div>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Find Your Perfect Internship
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Browse through available opportunities and apply today
        </p>
      </div>

      {/* Filter Section */}
      <div className="mb-8 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md mx-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col-span-2">
            <Label htmlFor="search" className="mb-2 dark:text-white">
              Search
            </Label>
            <TextInput
              id="search"
              placeholder="Search by title or company"
              value={filter.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="location" className="mb-2 dark:text-white">
              Location
            </Label>
            <Select
              id="location"
              value={filter.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="duration" className="mb-2 dark:text-white">
              Duration
            </Label>
            <Select
              id="duration"
              value={filter.duration}
              onChange={(e) => handleFilterChange("duration", e.target.value)}
            >
              <option value="">All Durations</option>
              {durations.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 m-4">
          {filteredInternships.length === 0 ? (
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 py-12 text-center">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                No internships found
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            filteredInternships.map((internship) => (
              <Card
                key={internship.id}
                className="transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex flex-col justify-between md:flex-row">
                  <div>
                    <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {internship.title}
                    </h5>
                    <div className="mb-1 flex items-center text-gray-700 dark:text-gray-300">
                      <HiOfficeBuilding className="mr-2" />
                      {internship.company}
                    </div>
                    <div className="mb-1 flex items-center text-gray-700 dark:text-gray-300">
                      <HiLocationMarker className="mr-2" />
                      {internship.location}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        <HiCalendar className="mr-2" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        <HiCurrencyDollar className="mr-2" />
                        {internship.stipend}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center md:mt-0">
                    <Link href={`/internships/${internship.id}`} passHref>
                      <Button color="blue">View Details</Button>
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{internship.description}</p>
              </Card>
            ))
          )}
        </div>
      )}
    <Foot/>
    </>
  );
}
