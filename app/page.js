import Link from 'next/link';
import React from 'react';
export default function Home() {
  return (
    <div className="bg-sec h-screen flex flex-col justify-center items-center gap-6">
      <div className="text-7xl font-bold">
        ToolCrib
      </div>
      <div className='max-w-md text-center'>
        Managing the inventory of your store has never been easier. InventoryStore is a simple and easy-to-use inventory management system that helps you keep track of your products.

      </div>
      <div>
        <Link href={"/Store"} className='bg-pri text-white px-4 py-2 rounded mt-4'>
          Get Started
        </Link>
      </div>
    </div>
  );
}
