import React, { useState } from 'react';
import AuthModal from './AuthModal'; // Adjust the path as needed

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLoginClick = () => {
    setMenuOpen(false);
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="w-full bg-white text-black p-4 relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-gray-700">Home</a>
            <a href="#" className="hover:text-gray-700">Shop</a>
            <a href="#" className="hover:text-gray-700">Appliances</a>
            <a href="#" className="hover:text-gray-700">Gifts</a>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-gray-700">Blog</a>
            <a href="#" className="hover:text-gray-700">About</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
            <button
              onClick={() => setShowAuthModal(true)}
              className="hover:text-gray-700"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-auto focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <img
              src="https://www.svgrepo.com/show/511003/hamburger-lg.svg"
              alt="Menu"
              className="h-6"
            />
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50 space-y-6 text-lg font-semibold">
            <button
              className="absolute top-4 right-4 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src="https://www.svgrepo.com/show/521564/close.svg"
                alt="Close"
                className="h-6"
              />
            </button>

            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Appliances</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Gifts</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
            <button
              onClick={handleLoginClick}
              className=""
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default SecondaryNavbar;
