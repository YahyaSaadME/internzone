"use client";

import { Foot } from '@/components/Foot';
import { Nav } from '@/components/Nav';
import { Button, Card, Spinner } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HiOfficeBuilding, HiLocationMarker, HiCurrencyDollar, HiCalendar, HiArrowLeft } from 'react-icons/hi';

// Sample internship data (same as in Internships.tsx)
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

export default function InternshipDetail() {
  const router = useRouter();
  const { search } = router.query;
  const [internship, setInternship] = useState<typeof INTERNSHIPS[0] | null>(null);

  useEffect(() => {
    if (search) {
      const foundInternship = INTERNSHIPS.find(
        (i) => i.title.toLowerCase().replace(/\s+/g, '-') === search
      );
      setInternship(foundInternship || null);
    }
  }, [search]);

  if (!internship) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Spinner size="xl" className="mx-auto mb-4" />
        <p>Loading internship details...</p>
      </div>
    );
  }

  return (
    <>
    <Nav/>
    <div className="container mx-auto px-4 py-8">
      <Link href="/internships" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <HiArrowLeft className="mr-2" /> Back to Internships
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{internship.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-700 mb-4">
            <div className="flex items-center">
              <HiOfficeBuilding className="mr-2" />
              {internship.company}
            </div>
            <div className="flex items-center">
              <HiLocationMarker className="mr-2" />
              {internship.location}
            </div>
            <div className="flex items-center">
              <HiCalendar className="mr-2" />
              {internship.duration}
            </div>
            <div className="flex items-center">
              <HiCurrencyDollar className="mr-2" />
              {internship.stipend}
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            Posted on {internship.postedDate}
          </div>
        </div>
        
        <div className="p-6">
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700">{internship.description}</p>
          </Card>
          
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {internship.requirements.map((req, index) => (
                <li key={index} className="mb-1">{req}</li>
              ))}
            </ul>
          </Card>
          
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-3">About the Company</h2>
            <p className="text-gray-700">{internship.description}</p>
          </Card>
          
            <Button as="a" href={"/"} target="_blank" rel="noopener noreferrer" color="blue" className="w-full md:w-auto">
              Apply Now
            </Button>
        </div>
      </div>
    </div>
    <Foot/>
    </>
  );
}
