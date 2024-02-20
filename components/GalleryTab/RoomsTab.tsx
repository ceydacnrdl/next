import React, { useState } from 'react';
import Rooms from 'icons/Rooms';
import AccordionIcon from 'icons/AccordionIcon';
import Lightbox from 'yet-another-react-lightbox';
import { useFetcRoomshHeader } from 'hooks/useFetchRoomsHeader';
import { useFetchRoomsContent } from 'hooks/useFetchRoomsContent';
import RoomContent from './RoomContent';

const RoomAccordion = ({ name, index, roomsNameValue }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string | undefined>();
  const firstItem = roomsNameValue?.[0];

  return (
    <div key={name.id}>
      <button
        onClick={() => {
          setRoomName(name);
          setIsOpen((prev) => !prev);
        }}
        className='relative w-[75rem] h-[3.938rem] top-[3.125rem] bg-secondary-light container flex items-center '
      >
        <div className='relative px-5 flex items-center'>
          <Rooms className='h-[1.75rem] w-[1.75rem]' />
          <div className='font-serif ml-2 '>{name.toUpperCase().split('-')}</div>
        </div>
        <div className='ml-auto'>
          <AccordionIcon open={isOpen} />
        </div>
      </button>
      <RoomContent firstItem={firstItem} isOpen={isOpen} name={name} index={index} />
    </div>
  );
};

const RoomsTab = () => {
  const { data: roomsNameValue, error, isLoading } = useFetcRoomshHeader();

  return (
    <>
      {roomsNameValue?.map(({ name }: any, index: any) => (
        <RoomAccordion name={name} index={index} roomsNameValue={roomsNameValue} />
      ))}
    </>
  );
};

export default RoomsTab;
