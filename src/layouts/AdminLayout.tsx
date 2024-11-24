import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Car, Calendar, Users, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const navigation = [
    { name: 'Dashboard', to: '/admin', icon: LayoutDashboard },
    { name: 'Cars', to: '/admin/cars', icon: Car },
    { name: 'Bookings', to: '/admin/bookings', icon: Calendar },
    { name: 'Users', to: '/admin/users', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === '/admin'}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t">
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}