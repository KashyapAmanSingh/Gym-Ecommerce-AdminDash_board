"use client"
import React, { useEffect, useState } from 'react';
import Removebtn from './Removebtn';
// import { FcEditImage } from 'react-icons/fc';
import Link from 'next/link';
// import { Loader1 } from './Progress';
import Image from 'next/image';

const getProducts = async () => {
  try {
    const res = await fetch("/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Product");
    }
    return res.json();
  } catch (error) {
    console.error("Error loading Products", error);
    return { products: [] }; // Return an empty array in case of an error
  }
};

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error loading Products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
                    <h4 className='bg-dark text-center py-5 fw-bold fs-2 text-info'> Total Products in Inventory</h4>

      {products.map((value) => (
        
        <div className='container ' key={value._id}>
          
          <div className='row mt-0 mb-4' >
            <div className='col-sm-1 '>
              
              {value.images && value.images[0] && (
                <Image
                  src={value.images[0]}
                  height={60}
                  width={70}
                  className='rounded-circle'
                  alt={`Image for ${value.title}`}
                />
              )}
            </div>
            <div className='col-sm-9'>
              <h5 className='fw-medium text-white'>Product Title: {value.title.slice(0, 99)}<span className='text-warning'>.....</span></h5>


 
            </div>
            <div className='col-sm-2 d-flex'>
            <div className='mx-4'>
              <Removebtn id={value._id} />
              </div>
              <div className='mx-4'>
                <Link className='btn btn-warning  ' href={`/editProduct/${value._id}`}>

                  Edit


                </Link></div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}
