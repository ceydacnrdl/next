import React, { useMemo, useState } from 'react';
import { type Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { useFetchRoomsContent } from 'hooks/useFetchRoomsContent';

interface RoomContentProps {
  firstItem: any;
  isOpen: boolean;
  name: string;
}

export default function RoomContent({ firstItem, isOpen, name }: RoomContentProps) {
  const [index, setIndex] = useState(-1);
  const { data: roomContent } = useFetchRoomsContent(name, firstItem?.id, isOpen);

  const newArray = useMemo(() => {
    const newArray: { md: Photo[]; gallery: Photo[] } = { md: [], gallery: [] };

    roomContent?.forEach((navItem: any) => {
      if (navItem.name.includes('-md')) {
        const replacedName = navItem.name.replace('-md', '-gallery');
        const galleryItem = roomContent.find(({ name }: any) => name === replacedName);

        if (galleryItem) {
          newArray.md.push({
            id: navItem.id!,
            src: navItem.url!,
            width: navItem.width!,
            height: navItem.height!,
          });

          newArray.gallery.push({
            id: galleryItem.id!,
            src: galleryItem.url!,
            width: galleryItem.width!,
            height: galleryItem.height!,
          });
        }
      }
    });

    return newArray;
  }, [roomContent]);

  return (
    isOpen && (
      <div className='container relative mt-8'>
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {newArray.md?.map((photo: any, index: any) =>
            index > 0 ? (
              <div key={photo.id}>
                <button type='button' onClick={() => setIndex(index)} className='outline-none'>
                  <img src={photo.src} alt='Content' />
                </button>
              </div>
            ) : null
          )}
        </div>

        <Lightbox open={index >= 0} close={() => setIndex(-1)} slides={newArray.gallery} index={index} />
      </div>
    )
  );
}
