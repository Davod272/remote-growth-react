
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  details: string;
  icon?: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, details, icon, className = "" }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-consult-green ${className}`}>
      <CardHeader className="space-y-1">
        {icon && <div className="text-consult-green mb-2 text-3xl">{icon}</div>}
        <CardTitle className="text-xl font-bold text-consult-teal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-consult-dark">{description}</CardDescription>
        
        {expanded && (
          <div className="pt-2 text-consult-dark text-sm animate-fade-in">
            {details}
          </div>
        )}
        
        <Button 
          variant="ghost" 
          className="flex items-center text-consult-green p-0 hover:text-consult-teal hover:bg-transparent"
          onClick={toggleExpanded}
        >
          {expanded ? (
            <>
              <span className="mr-1">Show less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="mr-1">Learn more</span>
              <ChevronDown size={16} />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
