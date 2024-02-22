import 'yet-another-react-lightbox/styles.css';
import React, { useState } from 'react';
import { useFetchHeader } from 'hooks/useFetchHeader';
import RoomsTab from './RoomsTab';
import Content from './Content';

// CTRL + SHIFT + L
// CTRL + D
// CTRL + ALT + ARROW KEYS
// CTRL + SPACE

// ES5 -> ES6
// ES6 ARROW FUNC - NORMAL FUNC

export default function TabContent({ activeTab }: any) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const { data: header, isFetching } = useFetchHeader();

  const firstItem = header?.[0];

  if (isFetching)
    return (
      <div role='status' className='animate-pulse'>
        <div className='h-60 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
        <span className='sr-only'>Loading...</span>
      </div>
    );

  return activeTab === 'rooms' ? (
    <RoomsTab />
  ) : (
    <Content
      firstItem={firstItem}
      activeTab={activeTab}
      onClick={handleImageClick}
      selectedImageIndex={selectedImageIndex}
      onClose={() => setSelectedImageIndex(-1)}
    />
  );
}
