import React from "react";

const bookingsData = [
  { id: 1, destination: "Bali, Indonesia", date: "2025-09-15", price: "$1200", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { id: 2, destination: "Rome, Italy", date: "2025-10-05", price: "$1400", image: "https://images.unsplash.com/photo-1549893073-f80c7a21e8e1?auto=format&fit=crop&w=800&q=80" },
  { id: 3, destination: "New York, USA", date: "2025-11-20", price: "$1600", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80" },
  { id: 4, destination: "Sydney, Australia", date: "2025-12-05", price: "$1800", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" },
  { id: 5, destination: "Tokyo, Japan", date: "2026-01-10", price: "$1500", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" },
  { id: 6, destination: "Delhi, India", date: "2025-09-10", price: "$400", image: "https://images.unsplash.com/photo-1599058917210-859e8b7c3de2?auto=format&fit=crop&w=800&q=80" },
  { id: 7, destination: "Mumbai, India", date: "2025-10-12", price: "$450", image: "https://images.unsplash.com/photo-1580584129447-0fc540ef91e7?auto=format&fit=crop&w=800&q=80" },
  { id: 8, destination: "Jaipur, India", date: "2025-11-05", price: "$350", image: "https://images.unsplash.com/photo-1611892440504-42c4e11f0f71?auto=format&fit=crop&w=800&q=80" },
  { id: 9, destination: "Goa, India", date: "2025-12-01", price: "$500", image: "https://images.unsplash.com/photo-1527539397432-17d0f64a5f9c?auto=format&fit=crop&w=800&q=80" },
];

const Bookings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookingsData.map((booking) => (
          <div key={booking.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={booking.image}
              alt={booking.destination}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{booking.destination}</h2>
              <p className="text-gray-600">Date: {booking.date}</p>
              <p className="text-gray-800 font-bold">Price: {booking.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
