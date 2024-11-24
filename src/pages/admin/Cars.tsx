import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Car } from '../../types';

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
  // ... other cars
];

export default function Cars() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cars Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Car
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Car Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cars.map((car) => (
              <tr key={car.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-16 rounded object-cover"
                      src={car.image}
                      alt={car.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{car.name}</div>
                      <div className="text-sm text-gray-500">
                        {car.brand} • {car.year}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    car.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {car.available ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  ${car.price}/day
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedCar(car);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TODO: Add Car Form Modal */}
    </div>
  );
}