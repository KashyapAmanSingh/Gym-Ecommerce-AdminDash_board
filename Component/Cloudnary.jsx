import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import cloudinary from 'cloudinary-core'; // Import the Cloudinary library

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dm2wuzfzc' });

function ImageUpload({ setOptimisedImageUrl,OptimisedImageUrl}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'bofedne7');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dm2wuzfzc/image/upload',
          formData
        );

        if (response.status === 200) {
          const { secure_url } = response.data;
          const optimizedImageUrl = cloudinaryCore.url(secure_url, {
            width: 500, 
            crop: 'fill', 
            quality: 'auto',  
            fetch_format: 'auto',  
          });

          setOptimisedImageUrl(optimizedImageUrl);
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Image upload error:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileSelect}
      />
      <button type="button" onClick={handleImageUpload}>
        Upload Image
      </button>

      {OptimisedImageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={OptimisedImageUrl} alt="Uploaded" />
          <p>This is the final URL: {OptimisedImageUrl}</p>
        </div>
      )}
     
    </div>
    
  );
}

export default ImageUpload;




