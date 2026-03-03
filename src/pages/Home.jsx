import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();

      setItems(data);
    }
    catch (error) {
      toast.error("Some error Occurred!!");
      setItems([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {
        loading ?
          (<Spinner />) :
          (
            items.length > 0 ?
              (
                <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-10">
                  {
                    items.map(item => <Product key={item.id} item={item} />)
                  }
                </div>
              ) :
              (
                <div className="flex justify-center items-center">
                  <p>No Data Found</p>
                </div>
              )
          )
      }
    </div>
  )
}
