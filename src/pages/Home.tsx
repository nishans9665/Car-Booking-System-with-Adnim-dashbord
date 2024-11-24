import React, { useState } from 'react';
import { Car } from '../types';
import { CarCard } from '../components/CarCard';
import { BookingModal } from '../components/BookingModal';
import { Search, Filter } from 'lucide-react';

// Sample data
const cars: Car[] = [
  {
    id: '1',
    name: 'Tesla Model S',
    brand: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 150,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000',
    type: 'Luxury',
    seats: 5,
    transmission: 'Automatic',
    available: true,
    features: ['Autopilot', 'Premium Sound', 'All-Wheel Drive']
  },
  {
    id: '2',
    name: 'BMW X5',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    price: 120,
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1000',
    type: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    available: true,
    features: ['Panoramic Roof', 'Leather Seats', 'Navigation']
  },
  {
    id: '3',
    name: 'Mercedes C-Class',
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    price: 100,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
    type: 'Sedan',
    seats: 5,
    transmission: 'Automatic',
    available: true,
    features: ['MBUX', 'LED Lights', 'Sport Package']
  }
];

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || car.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleBooking = (startDate: Date, endDate: Date) => {
    console.log('Booking confirmed:', { car: selectedCar, startDate, endDate });
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Car Rental</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Sports">Sports</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onBook={setSelectedCar}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedCar && (
        <BookingModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onConfirm={handleBooking}
        />
      )}
    </div>
  );
}