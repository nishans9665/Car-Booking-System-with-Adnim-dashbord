import React from 'react';
import { Car } from '../types';
import { Users, Fuel, Car as CarIcon } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onBook: (car: Car) => void;
}

export function CarCard({ car, onBook }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          ${car.price}/day
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-600">{car.brand} {car.model} • {car.year}</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {car.type}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <CarIcon size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">{car.type}</span>
          </div>
        </div>

        <button
          onClick={() => onBook(car)}
          disabled={!car.available}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors
            ${car.available 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        >
          {car.available ? 'Book Now' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  );
}