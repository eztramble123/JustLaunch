import React from 'react';
import CreateTokenButton from '@/components/CreateTokenButton'; // Import the client component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Menu Bar */}
      <div className="bg-white shadow-md p-4 mb-8 absolute top-0 w-full">
        <nav className="max-w-6xl mx-auto">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Existing content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl font-bold mb-8 font-sans text-gray-800">Just Launch</h1>
        <CreateTokenButton />
      </div>
    </div>
  );
}
