import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(''); // '' means no form, 'menu' means menu form, 'item' means item form
  const [menus, setMenus] = useState(['Menu 1', 'Menu 2']); // Dummy data for menus
  const [items, setItems] = useState([{ name: 'Item 1', price: 10 }, { name: 'Item 2', price: 20 }]); // Dummy data for items

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (formType) => {
    setShowForm(formType);
    setIsOpen(false); // Close the options menu once a form type is selected
  };

  const handleCancel = () => {
    setShowForm(''); // Close the form without saving
  };

  return (
    <div className="relative h-screen bg-gray-100 p-6">
      {/* Top navigation options */}
      <div className="flex justify-between mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Items</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Menu</button>
      </div>

      {/* Display created menus and items */}
      <div className="grid grid-cols-2 gap-6">
        {/* Menus */}
        <div>
          <h2 className="text-lg font-bold mb-4">Menus</h2>
          {menus.length ? (
            <ul className="bg-white p-4 rounded-lg shadow-lg">
              {menus.map((menu, index) => (
                <li key={index} className="border-b py-2">{menu}</li>
              ))}
            </ul>
          ) : (
            <p>No menus created yet.</p>
          )}
        </div>

        {/* Items */}
        <div>
          <h2 className="text-lg font-bold mb-4">Items</h2>
          {items.length ? (
            <ul className="bg-white p-4 rounded-lg shadow-lg">
              {items.map((item, index) => (
                <li key={index} className="border-b py-2">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items created yet.</p>
          )}
        </div>
      </div>

      {/* Plus button in the bottom-right */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={toggleMenu}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        {/* Options: Create Menu and Add Item */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg py-2 w-48">
            <button
              onClick={() => handleSelect('menu')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Create Menu
            </button>
            <button
              onClick={() => handleSelect('item')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Add Item
            </button>
          </div>
        )}
      </div>

      {/* Forms based on selection */}
      <div className="mt-6">
        {showForm === 'menu' && (
          <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Create Menu</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Menu Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter menu name"
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save Menu
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {showForm === 'item' && (
          <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Item</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Item Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter item name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Item Price</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter item price"
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save Item
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Menu;
