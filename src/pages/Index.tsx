
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import FeatureCard from "@/components/ui/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Reduce Costs",
      description: "Save up to 70% on operational costs compared to in-house staff or local providers.",
    },
    {
      title: "Increase Efficiency",
      description: "Leverage specialized expertise to streamline your business processes and workflows.",
    },
    {
      title: "No Rigid Contracts",
      description: "Flexible agreements that adapt to your business needs and scale with your growth.",
    },
    {
      title: "Fluent Communication",
      description: "Work with professionals who are fluent in English and your preferred languages.",
    },
    {
      title: "Certified Talent",
      description: "Access to pre-vetted professionals with verified qualifications and experience.",
    },
    {
      title: "Office-Based Professionals",
      description: "Our team works from our secure, monitored offices, not from home environments.",
    },
    {
      title: "Dedicated Workforce",
      description: "Your remote team works exclusively for your business, focusing solely on your needs.",
    },
    {
      title: "Performance-Driven Approach",
      description: "Regular reporting and KPI tracking ensure you get measurable results.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Powering Global Talent, Driving Business Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            🔹 Your Strategic Outsourcing Partner for Remote Excellence 🔹
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-0 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            At Consult Park, we connect businesses with world-class remote talent, helping them scale, optimize, and thrive in today's competitive landscape.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-consult-green hover:bg-consult-green/90 text-white text-lg px-8 py-6 animate-slide-in opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 md:py-24 bg-consult-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">Why Choose Consult Park</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              We deliver exceptional outsourcing solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consult-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with Consult Park and discover how our tailored outsourcing solutions can help your business thrive.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-consult-green hover:bg-white hover:text-consult-teal text-white text-lg px-8"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
