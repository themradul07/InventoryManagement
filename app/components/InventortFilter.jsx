"use client"
import React, { useState } from 'react';

const InventoryCategories = () => {
  const [activeButton, setActiveButton] = useState('');

  const categories = [
    { name: 'Electronics', icon: 'fas fa-tv' },
    { name: 'Furniture', icon: 'fas fa-couch' },
    { name: 'Clothing', icon: 'fas fa-tshirt' },
    { name: 'Books', icon: 'fas fa-book' },
    { name: 'Groceries', icon: 'fas fa-shopping-basket' },
    { name: 'Sports Equipment', icon: 'fas fa-football-ball' },
    { name: 'Toys', icon: 'fas fa-puzzle-piece' },
    { name: 'Automotive', icon: 'fas fa-car' },
    { name: 'Health & Beauty', icon: 'fas fa-heartbeat' },
  ];

  const btnClass = 'bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center m-1';
  const activeBtnClass = 'bg-blue-500 text-white';

  const handleButtonClick = (categoryName) => {
    setActiveButton(categoryName);
    // Implement additional logic for handling category selection
  };

  return (
    <div className="flex flex-wrap justify-center ">
      {categories.map((category) => (
        <button
          key={category.name}
          name={category.name}
          className={`${btnClass} ${activeButton === category.name ? activeBtnClass : ''}`}
          onClick={() => handleButtonClick(category.name)}
        >
          <i className={`${category.icon} mr-2`}></i> {category.name}
        </button>
      ))}
    </div>
  );
};

export default InventoryCategories;
