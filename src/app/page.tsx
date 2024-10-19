import React from 'react';
import CreateTokenButton from '@/components/CreateTokenButton'; // Import the client component

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 -mt-32 mb-8 font-sans">Just Launch</h1>
      <CreateTokenButton /> {/* Use the client component here */}
    </div>
  );
}
