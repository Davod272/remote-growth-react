
import React from "react";
import Layout from "@/components/layout/Layout";
import FeatureCard from "@/components/ui/FeatureCard";

const BPO = () => {
  const bpoSolutions = [
    {
      title: "Call Center & Help Desk Support",
      description: "Comprehensive customer service solutions including inbound support, outbound campaigns, and multi-channel communications.",
    },
    {
      title: "Back-Office & Data Processing",
      description: "Efficient handling of data entry, document processing, and administrative tasks to streamline your operations.",
    },
    {
      title: "Technical Support",
      description: "Skilled technicians providing troubleshooting, technical assistance, and IT support for your customers.",
    },
  ];

  const businessOptimization = [
    {
      title: "HR & Payroll Management",
      description: "End-to-end human resources solutions including recruitment, onboarding, benefits administration, and payroll processing.",
    },
    {
      title: "Workflow Automation & Efficiency Audits",
      description: "Assessment and optimization of business processes to eliminate bottlenecks and enhance productivity.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Business Process Outsourcing</h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Transform your operations with our comprehensive BPO solutions and business optimization services
          </p>
        </div>
      </section>

      {/* BPO Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">🚀 BPO Solutions</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              Comprehensive outsourcing services to enhance your customer experience and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bpoSolutions.map((solution, index) => (
              <FeatureCard
                key={index}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Optimization Section */}
      <section className="py-16 md:py-24 bg-consult-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">🧠 Business Optimization</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              Strategic services to streamline your processes and maximize operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessOptimization.map((solution, index) => (
              <FeatureCard
                key={index}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">Our BPO Process</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              A structured approach to implementing successful BPO solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-consult-green">
              <div className="text-3xl font-bold text-consult-green mb-4">01</div>
              <h3 className="text-xl font-bold text-consult-teal mb-2">Assessment</h3>
              <p className="text-consult-dark">We analyze your current processes to identify opportunities for improvement and outsourcing.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-consult-green">
              <div className="text-3xl font-bold text-consult-green mb-4">02</div>
              <h3 className="text-xl font-bold text-consult-teal mb-2">Solution Design</h3>
              <p className="text-consult-dark">Our experts design a customized BPO solution aligned with your business objectives.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-consult-green">
              <div className="text-3xl font-bold text-consult-green mb-4">03</div>
              <h3 className="text-xl font-bold text-consult-teal mb-2">Implementation</h3>
              <p className="text-consult-dark">We seamlessly integrate our BPO services into your existing operations with minimal disruption.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-consult-green">
              <div className="text-3xl font-bold text-consult-green mb-4">04</div>
              <h3 className="text-xl font-bold text-consult-teal mb-2">Optimization</h3>
              <p className="text-consult-dark">Continuous monitoring and refinement ensure your BPO solution delivers optimal results.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BPO;
