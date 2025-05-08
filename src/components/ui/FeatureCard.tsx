
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className = "" }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-consult-green hover:scale-[1.02] ${className}`}>
      <CardHeader className="space-y-1">
        {icon && <div className="text-consult-green mb-2 text-3xl">{icon}</div>}
        <CardTitle className="text-xl font-bold text-consult-teal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-consult-dark">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
