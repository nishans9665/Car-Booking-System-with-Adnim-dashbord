import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCars from './pages/admin/Cars';
import AdminBookings from './pages/admin/Bookings';
import AdminUsers from './pages/admin/Users';

function App() {
  // TODO: Replace with actual auth logic
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={isAdmin ? <AdminLayout /> : <Navigate to="/" replace />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="cars" element={<AdminCars />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;