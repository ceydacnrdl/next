import React, { useState } from 'react';
import RoomsIcon from 'icons/Rooms';
import AccordionIcon from 'icons/AccordionIcon';
import { useFetcRoomshHeader } from 'hooks/useFetchRoomsHeader';
import RoomContent from './RoomContent';

function RoomAccordion({ name, roomsNameValue }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const firstItem = roomsNameValue?.[0];

  return (
    <div key={name.id} className='mt-8'>
      <button
        className='relative w-full h-[3.938rem] bg-secondary-light container flex items-center'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className='relative px-5 flex items-center'>
          <RoomsIcon className='h-[1.75rem] w-[1.75rem]' />
          <div className='font-serif ml-2 '>{name.toUpperCase().split('-').join(' ')}</div>
        </div>
        <div className=' ml-auto mr-4'>
          <AccordionIcon open={isOpen} />
        </div>
      </button>
      <RoomContent firstItem={firstItem} isOpen={isOpen} name={name} />
    </div>
  );
}

function RoomsTab() {
  const { data: roomsNameValue, isFetching } = useFetcRoomshHeader();
  if (isFetching) return 'Loading...';

  return roomsNameValue?.map(({ id, name }: any, index: number) =>
    index > 0 ? <RoomAccordion key={id} name={name} roomsNameValue={roomsNameValue} /> : null
  );
}

export default RoomsTab;
