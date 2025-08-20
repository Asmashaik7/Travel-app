import React from "react";
import { Link } from "react-router-dom";

const offersData = [
  { 
    id: 1, 
    title: "Summer Special", 
    description: "Perfect safe destinations to escape the heat.", 
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    link: "/offers/summer"
  },
  { 
    id: 2, 
    title: "Adventure Awaits", 
    description: "Thrilling and safe adventures across the world.", 
    image: "https://images.unsplash.com/photo-1549893073-f80c7a21e8e1?auto=format&fit=crop&w=800&q=80",
    link: "/offers/adventure"
  },
  { 
    id: 3, 
    title: "Family Getaways", 
    description: "Relaxing, safe trips designed for families.", 
    image: "https://images.unsplash.com/photo-1599058917210-859e8b7c3de2?auto=format&fit=crop&w=800&q=80",
    link: "/offers/family"
  },
];

const Offers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Exclusive Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offersData.map((offer) => (
          <Link 
            key={offer.id} 
            to={offer.link} 
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{offer.title}</h2>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
