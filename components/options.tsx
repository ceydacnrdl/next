import React, { useState } from 'react';
import styles from '../styles/Options.module.css';

const Options = () => {
  const [clicked, setClicked] = useState<string[]>([]);

  const handleChange = (path: string) => {
    if (!clicked.includes(path)) {
      setClicked([...clicked, path]);
      // console.log(clicked)
    }
  };

  git config --global user.name "ceydacnrdl"
git config --global user.email "ceydacinardal07@gmail.com"

  return (
    <nav className={styles.nav}>
      <a
        className={`box w-[240px] h-[50px] border-gray-200 border-r border-solid serif 
  ${
    clicked.includes('?tab=all')
      ? 'bg-secondary-light text-primary no-underline flex items-center justify-center my-[30px]'
      : styles.noClicked
  }`}
        href='?tab=all'
        onClick={() => handleChange('?tab=all')}
      >
        <div className='w-full h-full flex items-center justify-center'>ALL</div>
      </a>
      {/* <a
        className={`w-[240px] h-[50px] box-border border-gray-200 border-r border-solid serif 
        ${
          clicked.includes('?tab=all')
            ? 'bg-secondary-light text-primary no-underline flex items-center justify-center my-[30px]'
            : styles.noClicked
        }`}
        href='?tab=all'
        onClick={() => handleChange('?tab=all')}
      >
        ALL
      </a> */}
      <a
        className={`${styles.box} ${clicked.includes('?tab=general') ? styles.clicked : styles.noClicked}`}
        href='?tab=general'
        onClick={() => handleChange('?tab=general')}
      >
        GENERAL
      </a>
      <a
        className={`${styles.box} ${clicked.includes('?tab=rooms') ? styles.clicked : styles.noClicked}`}
        href='?tab=rooms'
        onClick={() => handleChange('?tab=rooms')}
      >
        ROOMS
      </a>
      <a
        className={`${styles.box} ${clicked.includes('?tab=culinary') ? styles.clicked : styles.noClicked}`}
        href='?tab=culinary'
        onClick={() => handleChange('?tab=culinary')}
      >
        CULINARY
      </a>
      <a
        className={`${styles.box} ${clicked.includes('?tab=pools') ? styles.clicked : styles.noClicked}`}
        href='?tab=pools'
        onClick={() => handleChange('?tab=pools')}
      >
        POOLS
      </a>
      <a
        className={`${styles.box} ${clicked.includes('?tab=spa') ? styles.clicked : styles.noClicked}`}
        href='?tab=spa'
        onClick={() => handleChange('?tab=spa')}
      >
        SPA
      </a>
    </nav>
  );
};

export default Options;
