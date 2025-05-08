
import React from "react";

interface ValueTileProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
}

const ValueTile: React.FC<ValueTileProps> = ({ title, icon, description, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${className}`}>
      <div className="text-consult-green text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-consult-teal mb-3">{title}</h3>
      <p className="text-consult-dark">{description}</p>
    </div>
  );
};

export default ValueTile;
