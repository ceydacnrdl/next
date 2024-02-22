import React, { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useFetchHeader } from 'hooks/useFetchHeader';
import useEmblaCarousel from 'embla-carousel-react';
import useMatchMedia from 'hooks/useMatchMedia';

const navNameList = ['general', 'rooms', 'culinary', 'pools', 'spa'];

function TabHeader({ activeTab }: any) {
  const router = useRouter();
  const { data: header } = useFetchHeader();
  const isActive = useMatchMedia({ query: '(max-width: 1199px)' });

  const list = useMemo(
    () => (header ? navNameList.map((navName) => header.find((item: { name: string }) => item.name === navName)) : []),
    [header]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 'auto',
    active: isActive,
    breakpoints: {
      '(min-width:768px)': {
        align: 'center',
      },
    },
  });

  useEffect(() => {
    if (!emblaApi || !list) return;
    const { tab } = router.query;
    const index = list.findIndex(({ name }) => name === tab);
    if (index === -1) return;
    emblaApi.reInit({ startIndex: index });
  }, [emblaApi, list, router.query]);

  return (
    <div className='border-gray-200 border-y'>
      <nav className='overflow-hidden container' ref={emblaRef}>
        <div className='flex max-w-full'>
          {list.map(({ id, name }: any) => (
            <div key={id}>
              <button
                type='button'
                className={clsx(
                  'outline-none w-15 h-50 border-r-gray-200 border-r flex items-center justify-center my-30px last-of-type:border-r-0',
                  activeTab === name ? 'bg-secondary-light text-primary' : 'bg-gray-300 text-light'
                )}
                onClick={() => {
                  const { pathname, query } = router;
                  router.push({ pathname, query: { ...query, tab: name } }, undefined, {});
                }}
              >
                {name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default TabHeader;
