export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: 'SUV' | 'Sedan' | 'Sports' | 'Luxury';
  seats: number;
  transmission: 'Automatic' | 'Manual';
  available: boolean;
  features: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Booking {
  id: string;
  carId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
}