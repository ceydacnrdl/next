import { useFetchContent } from 'hooks/useFetchContent';
import React from 'react';
import { Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

export default function Content({ firstItem, activeTab, selectedImageIndex, onClose, onClick }: any) {
  const { data: content } = useFetchContent(activeTab, firstItem?.id);

  const newArray: { md: Photo[]; gallery: Photo[] } = { md: [], gallery: [] };

  content?.forEach((navItem: any) => {
    if (navItem.name.includes('-md')) {
      const replacedName = navItem.name.replace('-md', '-gallery');
      const galleryItem = content.find(({ name }: any) => name === replacedName);

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

  return (
    <>
      <div className='container px-4 relative mt-8'>
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {newArray.md?.map((photo: any, index: any) =>
            index > 0 ? (
              <div className='leading-none' key={photo.id}>
                <button type='button' onClick={() => onClick(index)} className='outline-none'>
                  <img src={photo.src} alt='Content' />
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>
      <Lightbox
        open={selectedImageIndex > -1}
        close={onClose}
        slides={newArray.gallery}
        index={selectedImageIndex || 0}
      />
    </>
  );
}
