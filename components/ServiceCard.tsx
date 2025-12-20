import React from "react";
import { Service } from "../types";

interface ServiceCardProps {
  service: Service;
  onDetailClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onDetailClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-large overflow-hidden text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 flex flex-col grow">
        <h3 className="font-display text-xl font-bold text-accent-brown mb-4 uppercase leading-tight min-h-[3.5rem] flex items-center justify-center">
          {service.title}
        </h3>
        <p className="text-text-sub mb-6 text-sm grow font-sans leading-relaxed">
          {service.description}
        </p>
        <button
          onClick={(e) => {
            if (onDetailClick) {
              e.preventDefault();
              onDetailClick();
            }
          }}
          className="text-accent-brown font-bold text-sm hover:text-primary transition-colors mt-auto border-t border-gray-100 pt-4 w-full uppercase tracking-widest"
        >
          CHI TIẾT
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;