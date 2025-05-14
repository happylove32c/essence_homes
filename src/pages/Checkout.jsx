import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoModal from '../components/InfoModal';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleEdit = (index) => {
    navigate(-1)
    // navigate(`/product/${product.id}`)
    // alert('You can implement an edit modal or form here!');
    // Or navigate to a product detail page to edit quantity, size, etc.
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-black hover:text-gray-700 text-sm flex items-center gap-1"
      >
        <img
          src="https://www.svgrepo.com/show/506439/chevron-left.svg"
          alt="Back"
          className="h-5 w-5"
        />
        Back
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border shadow-md rounded-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover rounded-md"
                  />
                  <div className="flex flex-col w-full gap-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Color: {item.color} | Size: {item.size}
                    </p>
                    <p className="text-sm">Qty: {item.quantity || 1}</p>
                    <p className="text-md mb-2 font-bold text-black">
                      ₦ {item.price}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(idx)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right flex justify-between items-center p-4">
              <div className="total">
                <h1 className="font-bold text-2xl">Total: <b>12,451.98</b></h1>
              </div>
              <button onClick={() => setShowModal(true)} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                Complete Your Order
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <img
              src="https://www.svgrepo.com/show/453011/sad.svg"
              alt="Empty cart"
              className="h-64 mb-6"
            />
            <p className="text-xl font-semibold text-gray-600">
              Nothing to display
            </p>
          </div>
        )}
      </div>

      {showModal && <InfoModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Checkout;
