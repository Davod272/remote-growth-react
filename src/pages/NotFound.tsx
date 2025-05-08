
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-consult-light">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-consult-teal mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-consult-dark mb-8">Oops! Page not found</p>
          <p className="text-lg text-consult-dark mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-consult-green hover:bg-consult-green/90 text-white"
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
