import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="text-center bg-white bg-opacity-90 p-8 rounded-lg max-w-2xl mx-4">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Your Trusted Plumbing Experts
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Reliable, fast, and affordable plumbing services for homes and businesses.
          </p>
          <Button className="bg-secondary hover:bg-secondary-dark text-white">
            Get a Free Quote
          </Button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Why Choose PipeMaster Pro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>24/7 Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We&apos;re always here for you, day or night, for emergencies.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Certified Professionals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our team is highly trained and certified to handle any plumbing issue.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Affordable Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Transparent pricing with no hidden fees.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white text-gray-700">
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  &quot;PipeMaster Pro fixed my leaky pipes in no time. Highly recommend their services!&quot;
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-700">
              <CardHeader>
                <CardTitle>Jane Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  &quot;Professional and efficient. They saved me from a plumbing disaster!&quot;
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Plumbing Help? Call Us Now!
          </h2>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Call Now: (123) 456-7890
          </Button>
        </div>
      </div>
    </div>
  );
}
