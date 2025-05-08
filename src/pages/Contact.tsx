
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting Consult Park. We'll get back to you shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consult-teal to-consult-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Get in touch with our team to discuss how we can help your business thrive
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-consult-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-t-4 border-consult-green">
                <CardHeader>
                  <CardTitle className="text-2xl text-consult-teal">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <User size={18} />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <Mail size={18} />
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <Phone size={18} />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                          <MessageSquare size={18} />
                        </div>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          className="pl-10 min-h-[120px]"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-consult-green hover:bg-consult-green/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-consult-teal mb-4">Contact Information</h2>
                <p className="text-consult-dark mb-8">
                  Have questions or ready to explore how Consult Park can help your business? Our team is here to provide the information you need.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Email Address</h3>
                    <p className="text-consult-dark">info@consultpark.com</p>
                    <p className="text-consult-dark">support@consultpark.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Phone Number</h3>
                    <p className="text-consult-dark">+1 (555) 123-4567</p>
                    <p className="text-consult-dark">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-consult-green p-3 rounded-full text-white mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-consult-teal">Office Hours</h3>
                    <p className="text-consult-dark">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-consult-dark">Weekend: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-consult-green mt-8">
                <h3 className="font-bold text-consult-teal mb-2">Headquarters</h3>
                <p className="text-consult-dark">
                  123 Business Avenue, Suite 456<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-consult-green">
                <h3 className="font-bold text-consult-teal mb-2">Global Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-consult-dark">London</p>
                    <p className="text-sm text-consult-dark">45 Finance Street, E14 5NR</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Singapore</p>
                    <p className="text-sm text-consult-dark">71 Robinson Road, 068895</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Sydney</p>
                    <p className="text-sm text-consult-dark">383 George Street, NSW 2000</p>
                  </div>
                  <div>
                    <p className="font-medium text-consult-dark">Toronto</p>
                    <p className="text-sm text-consult-dark">181 Bay Street, M5J 2T3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-consult-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Consult Park for their outsourcing needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-consult-light text-consult-teal hover:text-consult-teal text-lg px-8"
          >
            <a href="#contact-form">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
