import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState('Black');
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color,
      size,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // console.log('Added to cart:', cartItem);
    navigate('/');
  };

  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="top-4 left-4 text-black hover:text-gray-700 text-sm flex items-center gap-1"
      >
        <img
          src="https://www.svgrepo.com/show/506439/chevron-left.svg"
          alt="Back"
          className="h-8"
        />
        Back
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-auto h-auto sm:h-[80vh] rounded-lg shadow"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          {/* this number changes based on the number of items to be bought */}
          <p className="text-xl font-semibold text-black mb-6"><b className='font-bold'>₦ {product.price}</b></p>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div className="flex w-full flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Add to cart
            </button>
            <button className="bg-gray-100 text-black px-6 py-2 rounded hover:bg-gray-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
