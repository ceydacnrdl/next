import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import RoomsTab from './RoomsTab';
import { useState } from 'react';
import { useFetchHeader } from 'hooks/useFetchHeader';
import Content from './Content';

const TabContent = ({ activeTab }: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const { data: header, error, isLoading } = useFetchHeader();

  const firstItem = header?.[0];

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  if (activeTab === 'rooms') {
    return <RoomsTab />;
  } else {
    return (
      <Content
        firstItem={firstItem}
        activeTab={activeTab}
        onClick={handleImageClick}
        selectedImageIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(-1)}
      />
    );
  }
};

export default TabContent;
