import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./shared/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    container: {
      center: true,
      screens: {
        xs: '100%',
        sm: `${576 / 16}rem`,
        md: `${768 / 16}rem`,
        lg: `${992 / 16}rem`,
        xl: `${1200 / 16}rem`,
      },
    },
    extend: {
      backgroundImage: {
        check: "url('/images/svg/check.svg')",
        'two-right-arrow': "url('/images/svg/two-right-arrow.svg')",
        spa: "url('/images/common/spa-path.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-paths': "url('/images/common/green-paths.jpg')",
        checked:
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%239C9B9B'/%3E%3Cpath d='M4 10L8 14L16 6' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");",
        'new-year-gala-button': "url('/images/svg/new-year-gala-button.svg')",
      },
      borderColor: {
        light: {
          DEFAULT: '#9C9B9B',
          100: '#E5E5E5',
          200: '#E7EBEF',
        },
      },
      boxShadow: {
        DEFAULT: '0px 0px 4px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#262626',
        secondary: '#82A4B1',
        'secondary-light': '#DAE8EE',
        'pale-gray': '#EFF3F4',
        loyalty: {
          DEFAULT: '#062D48',
          100: '#7D8FA3',
        },
        gray: {
          DEFAULT: '#9C9B9B',
          100: '#D9D9D9',
          200: '#DDDDDD',
          300: '#F9F9F9',
        },
        cream: '#F8F6F3',
        green: {
          DEFAULT: '#7CCC98',
        },
      },
      fontSize: {
        xl: ['1.25rem', '2.1875'],
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        serif: 'var(--font-lora)',
      },
      height: {
        18: '4.5rem',
        26: '6.5rem',
        22: '5.5rem',
      },
      textColor: {
        light: '#757575',
      },
      opacity: {
        50: '0.5',
        75: '0.75',
      },
      scale: {
        50: '0.5',
        75: '0.75',
      },
      zIndex: {
        '100': '100',
      },
      gridRow: {
        'span-12': 'span 12 / span 12',
      },
      gridTemplateColumns: {
        custom: 'repeat(25, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-11': 'span 11 / span 11',
      },
      gridRowStart: {
        last: '12',
      },
    },
  },
  safelist: [
    'underline',
    'bg-light-85',
    'bg-light',
    'bg-white',
    'min-h-[100vh]',
    '-mx-[6rem]',
    'px-[6rem]',
    'px-[3rem]',
    'px-[1rem]',
    'scale-75',
    'scale-50',
    'before:bg-check',
    'xl:grid-cols-2',
    'xl:grid-cols-3',
    'rounded',
    'even:bg-gray-300',
    'even:col-span-2',
    'h-full',
    {
      pattern: /^bg-[a-z]+/,
    },
    {
      pattern: /^scale-[/d]+/,
    },
    {
      pattern: /^opacity-[/d]+/,
    },
    {
      pattern: /^!font-[a-z]+/,
    },
    {
      pattern: /^m[a-z]-[\d]+/,
    },
    {
      pattern: /^!m[a-z]-[\d]+/,
    },
    {
      pattern: /^m[a-z]:m[a-z]-[\d]+/,
    },
    {
      pattern: /^tracking-[a-z]+/,
    },
    {
      pattern: /^leading-[a-z]+/,
    },
    {
      pattern: /^h-[\d]+/,
    },
    {
      pattern: /^react-datepicker-[a-z]+/,
    },
    {
      pattern: /^react-datepicker__[a-z]+/,
    },
  ],
};
export default config;
