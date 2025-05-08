
import React from "react";
import Layout from "@/components/layout/Layout";
import ValueTile from "@/components/ui/ValueTile";

const About = () => {
  const values = [
    {
      title: "Excellence",
      icon: "💡",
      description: "We strive for excellence in everything we do, setting high standards for our team and the services we deliver.",
    },
    {
      title: "Integrity",
      icon: "🤝",
      description: "We operate with transparency and honesty, building trust with our clients through ethical business practices.",
    },
    {
      title: "Innovation",
      icon: "🚀",
      description: "We embrace new ideas and technologies to continuously improve our processes and service offerings.",
    },
    {
      title: "Global Reach",
      icon: "🌍",
      description: "We leverage global talent to provide diverse perspectives and round-the-clock service to our clients.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Consult Park</h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Transforming businesses through strategic outsourcing and global talent solutions
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-consult-dark mb-6">
              Consult Park is more than just an outsourcing company—we're your growth partner. Founded with a vision to bridge the gap between businesses and global talent, we've evolved into a comprehensive outsourcing solutions provider that helps companies of all sizes scale efficiently and sustainably.
            </p>
            <p className="text-lg text-consult-dark mb-6">
              Our team comprises industry experts and specialists who understand the nuances of different business sectors, allowing us to provide customized solutions that address your specific challenges and objectives.
            </p>
            <p className="text-lg text-consult-dark">
              With a global reach and a client-centric approach, we're committed to delivering exceptional service that empowers your business to thrive in an increasingly competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-consult-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-consult-teal mb-4">Our Mission</h3>
              <p className="text-consult-dark">
                To empower businesses through innovative outsourcing solutions that drive growth, efficiency, and competitive advantage, while creating meaningful opportunities for global talent.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-consult-teal mb-4">Our Vision</h3>
              <p className="text-consult-dark">
                To be the global leader in remote workforce solutions, known for excellence, integrity, and transformative impact on businesses and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">Our Values</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              The core principles that guide our decisions and define our corporate culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ValueTile
                key={index}
                title={value.title}
                icon={value.icon}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
