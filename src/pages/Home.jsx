import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SecondaryNavbar from '../components/SecondaryNavbar'
import ProductGrid from '../components/ProductGrid'

import { Link } from 'react-router-dom'
import AuthModal from '../components/AuthModal'

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = storedCart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalItems);
  }, []);
  return (
    <>
      <div className="min-h-screen p-4 relative">
        <Navbar />
        <SecondaryNavbar />
        <ProductGrid />
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

        {/* Floating Cart Button - Visible only on mobile */}
        <Link
          to="/cart"
          className="fixed bottom-6 right-6 z-40 md:hidden bg-gray-300 text-white p-4 rounded-full shadow-lg"
        >
          <img
            src="https://www.svgrepo.com/show/533043/cart-shopping.svg"
            alt="Cart"
            className="h-6 w-6"
          />
            {cartCount > 0 && (
              <span className="absolute top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
        </Link>
      </div>
    </>
  )
}

export default Home
