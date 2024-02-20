import { useFetchContent } from 'hooks/useFetchContent';
import React from 'react';
import Lightbox from 'yet-another-react-lightbox';

export default function Content({ firstItem, activeTab, selectedImageIndex, onClose, onClick }: any) {
  const { data: content } = useFetchContent(activeTab, firstItem?.id);

  return (
    <>
      <div className='container relative grid justify-center items-center grid-cols-4 gap-4 top-[5.813rem]'>
        {content
          ?.filter((navItem: any) => navItem.name.includes('md'))
          .map((photo: any, index: any) =>
            index > 0 ? (
              <div key={index}>
                <button type='button' onClick={() => onClick(index)} className='outline-none'>
                  <img src={photo.url} alt={`Image ${index + 1}`} />
                </button>
              </div>
            ) : null
          )}
      </div>
      <Lightbox open={selectedImageIndex > -1} close={onClose} slides={content} index={selectedImageIndex || 0} />
    </>
  );
}
