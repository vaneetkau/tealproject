import React, { useState } from 'react';
import firebase from 'firebase';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = () => {
    if (image) {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${image.name}`);
      imageRef.put(image)
        .then((snapshot) => {
          console.log('Image uploaded:', snapshot.metadata.fullPath);
          // You can save the image URL or filename to your database here
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;
