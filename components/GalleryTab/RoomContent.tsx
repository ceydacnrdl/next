import { useFetchRoomsContent } from 'hooks/useFetchRoomsContent';
import React from 'react';

const RoomContent = ({ firstItem, isOpen, name, index }: any) => {
  const { data: roomContent } = useFetchRoomsContent(name, firstItem?.id);

  return (
    <div>
      {isOpen && (
        <div className='container relative grid justify-center items-center grid-cols-4 gap-4 top-[5.813rem]'>
          {roomContent
            ?.filter((photo: any) => photo.name.includes('md'))
            .map((filteredPhoto: any, photoIndex: any) => (
              <div key={filteredPhoto.id}>
                <button type='button' className='outline-none'>
                  <img src={filteredPhoto.url} alt={`Image ${photoIndex + 1}`} />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default RoomContent;
