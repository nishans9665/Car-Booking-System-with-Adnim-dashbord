import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const bookings = [
  {
    id: '1',
    car: 'Tesla Model S',
    user: 'John Doe',
    startDate: '2024-03-15',
    endDate: '2024-03-18',
    status: 'confirmed',
    totalPrice: 450,
  },
  // ... other bookings
];

export default function Bookings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Bookings Management</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex gap-4">
            <select className="px-4 py-2 border rounded-lg">
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input
              type="date"
              className="px-4 py-2 border rounded-lg"
              placeholder="Filter by date"
            />
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {booking.car}
                    </span>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {booking.user}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {booking.startDate} to {booking.endDate}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    {
                      pending: 'bg-yellow-100 text-yellow-800',
                      confirmed: 'bg-green-100 text-green-800',
                      completed: 'bg-blue-100 text-blue-800',
                      cancelled: 'bg-red-100 text-red-800',
                    }[booking.status]
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  ${booking.totalPrice}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}