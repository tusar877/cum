import { useState } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const openNewTab = () => {
    const url = 'https://warriorplus.com/o2/a/kc2ykv/0';
    window.open(url, '_blank');
  };

  return (
    <div>
      <button onClick={openNewTab}>Open New Tab</button>
    </div>
  );
};

export default Home;
