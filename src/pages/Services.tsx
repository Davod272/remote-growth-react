
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ui/ServiceCard";

const Services = () => {
  const services = {
    staffing: [
      {
        title: "Virtual Assistants",
        description: "Dedicated remote professionals to handle your administrative tasks and day-to-day operations.",
        details: "Our virtual assistants are highly trained professionals who can manage calendars, emails, customer service, data entry, and more. They work in your time zone and adapt to your business processes quickly.",
      },
      {
        title: "Remote Project Teams",
        description: "Assemble specialized teams for specific projects or ongoing business initiatives.",
        details: "Get access to cross-functional teams consisting of project managers, developers, designers, and quality assurance professionals who collaborate to deliver your projects on time and within budget.",
      },
      {
        title: "Executive Support",
        description: "High-level administrative assistance for C-suite executives and management teams.",
        details: "Our executive assistants provide sophisticated support including complex scheduling, travel arrangements, stakeholder communications, and confidential information management for your leadership team.",
      },
    ],
    admin: [
      {
        title: "Data Entry & Management",
        description: "Accurate and efficient processing of your business data and information.",
        details: "Our data specialists handle everything from basic data entry to complex database management, ensuring your business information is organized, accurate, and accessible.",
      },
      {
        title: "Calendar & Email Management",
        description: "Professional handling of schedules, appointments, and communications.",
        details: "Let our administrative professionals manage your calendar, schedule meetings, prioritize emails, and maintain your professional correspondence with prompt responses and follow-ups.",
      },
      {
        title: "Document Processing",
        description: "Creation, formatting, and management of business documents and reports.",
        details: "From drafting professional correspondence to formatting complex reports and presentations, our document specialists ensure your business materials are polished and professional.",
      },
    ],
    sales: [
      {
        title: "Lead Generation",
        description: "Identify and cultivate potential customers for your products or services.",
        details: "Our lead generation specialists use proven methodologies and tools to identify qualified prospects, conduct outreach, and nurture relationships that convert to sales opportunities.",
      },
      {
        title: "Sales Support",
        description: "Comprehensive assistance for your sales team to close more deals.",
        details: "Get support with proposal development, competitor research, CRM management, and sales analytics to help your sales representatives focus on building relationships and closing deals.",
      },
      {
        title: "Customer Relationship Management",
        description: "Maintain and enhance relationships with your existing customer base.",
        details: "Our CRM specialists help you implement systems and processes to track customer interactions, manage follow-ups, and identify opportunities for upselling and cross-selling.",
      },
    ],
    accounting: [
      {
        title: "Bookkeeping",
        description: "Accurate recording and organization of your financial transactions.",
        details: "Our bookkeepers handle accounts payable, accounts receivable, bank reconciliations, and financial record-keeping to ensure your books are accurate and up-to-date.",
      },
      {
        title: "Financial Reporting",
        description: "Regular preparation and analysis of your business financial statements.",
        details: "Receive professional financial reports including profit and loss statements, balance sheets, and cash flow analysis to help you make informed business decisions.",
      },
      {
        title: "Payroll Processing",
        description: "Efficient management of employee compensation and related tax filings.",
        details: "Our payroll specialists handle employee payments, tax withholdings, benefits administration, and compliance with regulatory requirements for businesses of all sizes.",
      },
    ],
    marketing: [
      {
        title: "Social Media Management",
        description: "Strategic management of your brand's social media presence and engagement.",
        details: "Our social media specialists develop content calendars, create engaging posts, respond to comments, and analyze performance to build your brand presence across all relevant platforms.",
      },
      {
        title: "Content Creation",
        description: "Development of compelling written and visual content for your marketing channels.",
        details: "From blog posts and articles to infographics and videos, our content creators produce high-quality materials that engage your audience and support your marketing objectives.",
      },
      {
        title: "Digital Marketing Campaigns",
        description: "Planning and execution of targeted online marketing initiatives.",
        details: "Our digital marketing experts manage email campaigns, SEO optimization, paid advertising, and analytics tracking to reach your target audience and achieve measurable results.",
      },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Comprehensive outsourcing solutions designed to propel your business forward
          </p>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-consult-teal mb-4">Explore Our Service Categories</h2>
            <p className="text-lg text-consult-dark max-w-2xl mx-auto">
              Tailored solutions to address your specific business needs and objectives
            </p>
          </div>

          <Tabs defaultValue="staffing" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger value="staffing" className="py-2">Virtual Staffing</TabsTrigger>
                <TabsTrigger value="admin" className="py-2">Admin Support</TabsTrigger>
                <TabsTrigger value="sales" className="py-2">Sales & Lead Gen</TabsTrigger>
                <TabsTrigger value="accounting" className="py-2">Accounting</TabsTrigger>
                <TabsTrigger value="marketing" className="py-2">Digital Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="staffing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.staffing.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="admin" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.admin.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.sales.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accounting" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.accounting.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.marketing.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    details={service.details}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
