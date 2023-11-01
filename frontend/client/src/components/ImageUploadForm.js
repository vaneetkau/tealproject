import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios
        .post('http://localhost:4000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Handle the response, which may include the uploaded image's filename
          console.log('Image uploaded:', response.data.filename);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUploadForm;
