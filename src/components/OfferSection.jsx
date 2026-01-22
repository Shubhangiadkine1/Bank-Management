import React from "react";
import { FaPiggyBank, FaUniversity, FaCreditCard } from "react-icons/fa";

const OfferSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-blue-900">
          Exclusive Banking Offers
        </h2>
        <p className="text-gray-600 mt-2">
          Choose from our wide range of banking benefits designed for you
        </p>
      </div>

      {/* FULL WIDTH GRID */}
      <div className="w-full flex justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full">
          
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <FaPiggyBank className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold mb-4">
              Zero Balance Savings Account
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Open a savings account with zero minimum balance and enjoy free
              banking services.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <FaUniversity className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold mb-4">
              Personal Loan @ 10.5% Interest
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get instant personal loans with low interest rates and flexible
              repayment options.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800">
              Apply Now
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <FaCreditCard className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-2xl font-semibold mb-4">
              Lifetime Free Credit Card
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Enjoy cashback, reward points, and exclusive benefits with our
              free credit card.
            </p>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection;
