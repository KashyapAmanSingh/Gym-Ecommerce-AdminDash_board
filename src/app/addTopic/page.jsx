"use client"
import React, { useState } from 'react';
import ImageUpload from '../../../Component/Cloudnary';

const AddTopic = () => {
  const [OptimisedImageUrl, setOptimisedImageUrl] = useState([]);
console.log("==============OptimisedImageUrl================",OptimisedImageUrl)
  const [productData, setProductData] = useState({
    title: '',
    description: '',
  
    price: 0,
    stock: 0,
    discount: 0,
    offers: '',
    category: '',
    brand: '',
    seller: '',
    size: 0,
    model: '',
    ratings: 0,
    tags: 'new Arrival',
    legalDisclaimer: '',
    manufacturingInfo: '',
  });
   
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'tags' && value === '') {
      setProductData({ ...productData, [name]: 'new Arrival' });
    }

    if (name === 'category' && value === '') {
      setProductData({ ...productData, [name]: 'Supplements' });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();


    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    const apiUrl = `http://localhost:${apiPort}/api/topics`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
  
        body: JSON.stringify({
          ...productData,
          images: OptimisedImageUrl, 
          dateAdded: new Date(),
        }),
        
        
      });
      if (res.ok) {

        window.location.href = '/';
      } else {
        throw new Error("Sorry, we failed to create Topics");
      }
    } catch (error) {
      console.error(error);
return NextResponse.error("Failed to create the topic", { status: 500 });
    }


    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div class="mb-3 mt-3">
          <label htmlFor="title">Title:</label>

          <input type="text" placeholder='Topic Title' name='title' id='title' value={productData.title} onChange={handleChange} required />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="description">Description:</label>
          <textarea placeholder='Topic Description' class="form-control" rows="5" name='description' id='description' value={productData.description} onChange={handleChange} required ></textarea>


        </div>
        {/* <div class="mb-3 mt-3">
          <label htmlFor="ImageUrl">Upload Image:</label>

          <input type="text" placeholder='Upload Image ' name='ImageUrl' id='ImageUrl' value={OptimisedImageUrl} onChange={handleChange} />

        </div> */}
        <div class="mb-3 mt-3">
          <label htmlFor="Price"> Enter Price:</label>

           <input placeholder='Enter Price' name='price' id='Price' value={productData.price} onChange={handleChange} required />

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor=" stock">  Enter Stock:</label>

           <input placeholder='Enter stock' name='stock' id='stock' value={productData.stock} onChange={handleChange} required />

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="discount">Enter Discount:</label>


          <input type="text" placeholder='Enter discount' name='discount' id='discount' value={productData.discount} onChange={handleChange} />

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="offers">Enter Offers:</label>

          <input placeholder='Enter Offers' name='offers' id='offers' value={productData.offers} onChange={handleChange} />

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="category">Enter Category:</label>

 

<select
  className="form-select"
  name='category'
  id='category'
  value={productData.category}
  onChange={handleChange}
  required
>
  <option value="">Select Category</option>
  {["Supplements", "Equipment", "Footwear", "Nutrition"].map((tagValue, index) => (
    <option key={index} value={tagValue}>
      {tagValue}
    </option>
  ))}
</select>
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="brand">Enter Brand Name:</label>

          <input type="text" placeholder='Enter brand' name='brand' id='brand' value={productData.brand} onChange={handleChange} />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="seller"> Enter Seller Name:</label>

          <input type="text" placeholder='Enter seller ' name='seller' id='seller' value={productData.seller} onChange={handleChange} required />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="size">Enter Size:</label>

          <input  placeholder='Enter Size' name='size' id='size' value={productData.size} onChange={handleChange} />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="model">Enter Model Name/Number:</label>

          <input type="text" placeholder='Enter model' name='model' id='model' value={productData.model} onChange={handleChange} />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="ratings">Give Rating:</label>

          <input placeholder='Enter Rating' name='ratings' id='ratings' value={productData.ratings} onChange={handleChange} />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="tags">Enter Tags:</label>

          <select
  className="form-select"
  id="tags"
  name="tags"
  value={productData.tags}
  onChange={handleChange}
>
  <option value="">Select an option</option>
  {["new Arrival", "Popular", "oldest Arrival", "Months Trending", "Assured"].map((tagValue, index) => (
    <option key={index} value={tagValue}>
      {tagValue}
    </option>
  ))}
</select>
           

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="legalDisclaimer">LegalDisclaimer:</label>

          <textarea type="text" placeholder='Enter legalDisclaimer' name='legalDisclaimer' id='legalDisclaimer' value={productData.legalDisclaimer} onChange={handleChange} ></textarea>

        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="manufacturingInfo">ManufacturingInfo:</label>
          <textarea type="text" placeholder='Enter manufacturingInfo' name='manufacturingInfo' id='manufacturingInfo' value={productData.manufacturingInfo} onChange={handleChange} ></textarea>


        </div>



        <button type="submit" className='btn btn-info mt-1'>Add topics</button>
      </form>
      <ImageUpload setOptimisedImageUrl={setOptimisedImageUrl} OptimisedImageUrl={OptimisedImageUrl} />
    </div>
  );
}

export default AddTopic;
