import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2 divide-y-[3px] divide-gray-500">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>

          <div className="w-full md:w-[40%] mt-5 sticky top-28 self-start p-6 rounded-lg">
            <div className="flex flex-col gap-6">

              <div>
                <h2 className="text-xl font-semibold text-green-800">Your Cart</h2>
                <h1 className="text-5xl font-bold text-green-700">Summary</h1>
              </div>

              <div className="text-lg font-semibold text-gray-700">
                Total Items: {cart.length}
              </div>

              <div className="pt-4">
                <p className="text-xl font-bold">
                  Total Amount: ${total.toFixed(2)}
                </p>

                <button className="w-full mt-5 bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  CheckOut Now
                </button>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  )
}
