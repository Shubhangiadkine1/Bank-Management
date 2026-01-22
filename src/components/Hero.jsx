import { CreditCard, ShieldCheck, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601597111158-2fceff292cdc')",
      }}
    >
      <div className="bg-white/80 p-10 rounded-xl max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to HDFC Bank Management System
        </h1>

        <p className="text-gray-600 mb-6">
          Secure, fast and reliable digital banking services
        </p>

        <div className="flex justify-center gap-4">
          <Link to='/create-account' className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Get Started
          </Link>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>


         
      </div>
    </section>
  );
};

export default Hero;
