import React, { useEffect, useState } from 'react';
import styles from '../styles/Album.module.css';
import { useSearchParams } from 'next/navigation';

interface Category {
  src: string;
  width: number;
  height: number;
}

interface Categories {
  [key: string]: Category[];
}

const categories: Categories = {
  general: [
    { src: '/general/general1.png', width: 282, height: 227 },
    { src: '/general/general2.jpg', width: 282, height: 227 },
    { src: '/general/general3.jpg', width: 282, height: 227 },
    { src: '/general/general4.jpg', width: 282, height: 227 },
  ],

  pool: [
    { src: '/pools/1.png', width: 282, height: 227 },
    { src: '/pools/2.jpg', width: 282, height: 227 },
    { src: '/pools/3.jpg', width: 282, height: 227 },
    { src: '/pools/4.jpg', width: 282, height: 227 },
  ],

  rooms: [
    { src: '/rooms/Rectangle 9235 (2).jpg', width: 282, height: 227 },
    { src: '/rooms/Rectangle 9236 (3).jpg', width: 282, height: 227 },
    { src: '/rooms/Rectangle 9237 (3).jpg', width: 282, height: 227 },
    { src: '/rooms/Rectangle 9238 (2).jpg', width: 282, height: 227 },
  ],

  culinary: [
    { src: '/culinary/Rectangle 9235 (1).jpg', width: 282, height: 227 },
    { src: '/culinary/Rectangle 9236 (2).jpg', width: 282, height: 227 },
    { src: '/culinary/Rectangle 9237 (2).jpg', width: 282, height: 227 },
    { src: '/culinary/Rectangle 9238 (1).jpg', width: 282, height: 227 },
  ],

  spa: [
    { src: '/spa/Rectangle 9235 (3).jpg', width: 282, height: 227 },
    { src: '/spa/Rectangle 9236 (4).jpg', width: 282, height: 227 },
    { src: '/spa/Rectangle 9237 (4).jpg', width: 282, height: 227 },
    { src: '/spa/Rectangle 9238 (3).jpg', width: 282, height: 227 },
  ],
};

const Album = () => {
  const [array, setArray] = useState<Category[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get('tab');

  useEffect(() => {
    const selectedArray = categories[search || 'general'] || categories.general;
    setArray(selectedArray);
  }, [search, searchParams]);

  return (
    <div className={styles.container}>
      {array.map((photo, index) => (
        <div key={index} className={styles.image}>
          <img src={photo.src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Album;
