import React from "react";

const destinationsData = [
  { id: 1, name: "Bali, Indonesia", description: "Tropical paradise with beautiful beaches and lush jungles.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Rome, Italy", description: "Explore ancient history, delicious cuisine, and stunning architecture.", image: "https://images.unsplash.com/photo-1549893073-f80c7a21e8e1?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "New York, USA", description: "The city that never sleeps – vibrant culture, shopping, and nightlife.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Sydney, Australia", description: "Famous for its harbour, Opera House, and beautiful beaches.", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Tokyo, Japan", description: "A vibrant city blending tradition, technology, and food culture.", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Delhi, India", description: "The capital city full of history, monuments, and vibrant street food.", image: "https://images.unsplash.com/photo-1599058917210-859e8b7c3de2?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Mumbai, India", description: "India's financial hub with beaches, Bollywood, and nightlife.", image: "https://images.unsplash.com/photo-1580584129447-0fc540ef91e7?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Jaipur, India", description: "The Pink City known for palaces, forts, and rich culture.", image: "https://images.unsplash.com/photo-1611892440504-42c4e11f0f71?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Goa, India", description: "Famous for beaches, nightlife, and Portuguese heritage.", image: "https://images.unsplash.com/photo-1527539397432-17d0f64a5f9c?auto=format&fit=crop&w=800&q=80" },
];

const Destinations = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Popular Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinationsData.map((dest) => (
          <div key={dest.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{dest.name}</h2>
              <p className="text-gray-600">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
