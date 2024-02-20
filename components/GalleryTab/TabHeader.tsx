import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useFetchHeader } from 'hooks/useFetchHeader';

const TabHeader = ({ activeTab }: any) => {
  const router = useRouter();

  const { data: header, error, isLoading } = useFetchHeader();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <nav className='border-gray-200 border-y flex justify-center text-center items-center '>
      {header
        ?.filter((navItem: any) => navItem.parentId === 405)
        .map((navItem: any) => (
          <button
            type='button'
            key={navItem.id}
            className={clsx(
              'outline-none w-15 h-50 border-r-gray-200 border-r flex items-center justify-center my-[1.875rem] last-of-type:border-r-0',
              activeTab === navItem.name.toLowerCase() ? 'bg-secondary-light text-primary' : 'bg-gray-300 text-light'
            )}
            onClick={() => {
              const { pathname, query } = router;
              router.push({ pathname, query: { ...query, tab: navItem.name.toLowerCase() } }, undefined, {});
            }}
          >
            {navItem.name.toUpperCase()}
          </button>
        ))}
    </nav>
  );
};

export default TabHeader;
