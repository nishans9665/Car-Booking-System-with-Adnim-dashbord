import React, { useState } from 'react';
import { Car } from '../types';
import { format } from 'date-fns';
import { X } from 'lucide-react';

interface BookingModalProps {
  car: Car;
  onClose: () => void;
  onConfirm: (startDate: Date, endDate: Date) => void;
}

export function BookingModal({ car, onClose, onConfirm }: BookingModalProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(new Date(startDate), new Date(endDate));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Book {car.name}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              min={format(new Date(), 'yyyy-MM-dd')}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              min={startDate || format(new Date(), 'yyyy-MM-dd')}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="pt-4">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Daily Rate:</span>
              <span className="font-semibold">${car.price}</span>
            </div>
            {startDate && endDate && (
              <div className="flex justify-between border-t pt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-lg">
                  ${car.price * Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)))}
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}