import React from 'react';
import { Car, DollarSign, Users, Calendar } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Total Cars', value: '24', icon: Car, color: 'bg-blue-500' },
    { name: 'Active Bookings', value: '12', icon: Calendar, color: 'bg-green-500' },
    { name: 'Total Users', value: '156', icon: Users, color: 'bg-purple-500' },
    { name: 'Revenue', value: '$12,450', icon: DollarSign, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  <div>
                    <p className="font-medium">New booking: Tesla Model S</p>
                    <p className="text-sm text-gray-500">John Doe • 2 hours ago</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">$150/day</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}