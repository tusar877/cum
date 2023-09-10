import { useEffect } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  useEffect(() => {
    const url = 'https://warriorplus.com/o2/a/kc2ykv/0';
    const numberOfTabsToOpen = 10;

    for (let i = 0; i < numberOfTabsToOpen; i++) {
      const newTab = window.open(url, '_blank');
      if (newTab) {
        newTab.focus();
      }
    }
  }, []);

  return null;
};

export default Home;

