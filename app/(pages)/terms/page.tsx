"use client";
import { Button, Card } from 'flowbite-react';
import Link from 'next/link';

export default function Page() {
  return (    
  <div className="container mx-auto px-4 py-8 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">Terms and Conditions</h1>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              These Terms and Conditions govern your use of our website and services. By accessing or using our website,
              you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our website.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">2. Web Scraping Policy</h2>
            <p className="mb-4">
              Unlike many websites, we <strong>explicitly permit web scraping</strong> of our publicly accessible content
              under the following conditions:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Scraping activities must not overload our servers or impact the website performance</li>
              <li className="mb-2">Scrapers should respect a reasonable crawl rate (we suggest a delay of at least 1 second between requests)</li>
              <li className="mb-2">Scraped content may be used for research, educational, non-commercial, or personal projects</li>
              <li className="mb-2">Attribution to our website as the source of the data is appreciated</li>
              <li className="mb-2">Scrapers must comply with our robots.txt file directives</li>
            </ul>
            <p className="mb-4">
              We believe in open access to information and support responsible data collection for legitimate purposes.
              However, we reserve the right to block IP addresses that conduct aggressive scraping that negatively impacts
              our service availability.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The website and its original content, features, and functionality are owned by us and are protected by
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              While we allow scraping as outlined above, this does not transfer any intellectual property rights to scrapers.
              You may use the data in accordance with fair use principles and our scraping policy.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">4. User Contributions</h2>
            <p className="mb-4">
              Users may post content to our website. You retain ownership of your content, but grant us a license to use,
              modify, publicly perform, publicly display, reproduce, and distribute such content on our website.
            </p>
            <p>
              Be aware that user-contributed content may also be collected through web scraping according to our policy.
              If you do not want your contributions to be potentially scraped, please do not post them to our website.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              We shall not be liable for any damages arising out of or related to your use of the website, including any
              data obtained through scraping. This includes any direct, indirect, special, incidental, consequential, or
              punitive damages.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by
              posting the new Terms on this page. Your continued use of the website after such modifications constitutes
              your acceptance of the new Terms.
            </p>
          </Card>
  
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-blue-600">terms@example.com</p>
          </Card>
  
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">Last updated: June 12, 2023</p>
            <Link href="/">
              <Button color="light">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
  );
}
