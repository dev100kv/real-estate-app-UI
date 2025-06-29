import React from 'react';

// components
import Banner from '../components/Banner/Banner'
import HouseList from '../components/HouseLIst/HouseList'
import Value from '../components/Value/Value';
import Search from '../components/Search/Search';
import ResidenciesSlider from '../components/ResidencySlider/ResidencySlider';

const Home = () => {
  return (
    <div className='min-h-[1050px]'>
      <Banner />
      <Value />
      {/* <ResidenciesSlider /> */}
      <Search />
      <HouseList />
    </div>
  )
};

export default Home;
