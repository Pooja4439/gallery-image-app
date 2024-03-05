
import React, { useState, useEffect } from 'react';
import { getImagesByCategory } from '../../services/images';

function DisplayImages() {
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images based on category
    const fetchImages = async () => {
      const fetchedImages = await getImagesByCategory(category);
      setImages(fetchedImages);
    };
    fetchImages();
  }, [category]);

  return (
    <div>
      <h2>Display Images</h2>
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.source} alt={image.imageName} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayImages;
