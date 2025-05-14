import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal'; // Make sure this path is correct

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false)
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = storedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalItems);
  }, []);

  return (
    <>
      <nav className="w-full bg-white p-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="hidden md:flex items-center">
          <img
            src="https://www.svgrepo.com/show/527528/star-angle.svg"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Center: Rounded Navbar with Search */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 text-sm px-2"
            />
            <button className="ml-2">
              <img
                src="https://www.svgrepo.com/show/511119/search-magnifying-glass.svg"
                alt="Search"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>

        {/* Right: Buttons and Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className="text-sm font-semibold text-gray-700 hover:text-black"
            onClick={() => setShowAuth(true)}
          >
            Login
          </button>

          {/* Cart Icon with Badge */}
          <Link to={'/cart'} className="relative">
            <img
              src="https://www.svgrepo.com/show/533043/cart-shopping.svg"
              alt="Cart"
              className="h-8"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Icon */}
          <button>
            <img
              src="https://www.svgrepo.com/show/512697/profile-1341.svg"
              alt="Profile"
              className="h-8"
            />
          </button>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
