import React from "react";
import { CreditCard, Users, ShieldCheck } from "lucide-react";
import Login from "./Authentication/Login";
import Hero from "../components/Hero";
import OfferSection from "../components/OfferSection";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white p-10 flex justify-between items-center">
        <h1 className="font-bold text-3xl">
          HDFC Bank
        </h1>

        <div className="flex items-center space-x-6">
          <nav className="space-x-6 ">
            <a href="/" className="hover:underline">Home</a>
            <a href="/Accounts" className="hover:underline">Accounts</a>
            <a href="/Loans" className="hover:underline">Loans</a>
            <a href="/Contact" className="hover:underline">Contact</a>
          </nav>

          <button className="bg-white text-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-green-400 hover:text-white">
            <a href="/login">Login</a>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <section className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="p-6 bg-white rounded-xl shadow">
            <CreditCard className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Easy Transactions
            </h3>
            <p className="text-gray-600 text-center">
              Fast and secure online transactions anytime.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <Users className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Customer Friendly
            </h3>
            <p className="text-gray-600 text-center">
              Simple and user-friendly banking experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <ShieldCheck className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Highly Secure
            </h3>
            <p className="text-gray-600 text-center">
              Advanced security for your financial data.
            </p>
          </div>

        </div>
        <OfferSection/>
      </section>
    </>
  );
}
