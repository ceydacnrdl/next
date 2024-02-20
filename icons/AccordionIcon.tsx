import React from 'react';

interface AccordionIconProps extends React.SVGProps<SVGSVGElement> {
  open: boolean;
}

export default function AccordionIcon({ fill = 'currentColor', open, ...props }: AccordionIconProps) {
  const transformValue = open ? 'rotate(180 0 0)' : '';

  return (
    <svg
      width='18'
      height='9'
      transform={transformValue}
      viewBox='0 0 18 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.999844 8.09741L7.51984 1.57741C8.28984 0.807412 9.54984 0.807412 10.3198 1.57741L16.8398 8.09741'
        stroke='#262626'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
