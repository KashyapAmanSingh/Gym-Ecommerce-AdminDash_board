
"use client";

/* eslint-disable no-undef */
import React from 'react';
import EditProductForm from '../../../../Component/EditProductForm';
 



const getProductById = async (id) => {
  try {
    // const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    // const apiUrl = `http://localhost:${apiPort}/api/Products/${id}`; 

    const res = await fetch(`/api/products/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch the Products');
    }
    const data = await res.json();
    console.error('data fetching Products:', data);
    return data;
  } catch (error) {
    console.error('Error fetching Products:', error);
    throw error;
  }
}



const editProducts = async ({ params }) => {
  const { id } = params;

  try {
    const { product } = await getProductById(id);
    if (product) {

      return <EditProductForm  Product={product} id={id} />;
    } else {
      return <div>Error: Product not found for this ID</div>;
    }
  } catch (error) {
    console.error('Error editing Product:', error);
  }
}


export default editProducts;
