import React from 'react';

// images
// import Image from '../assets/img/house-banner.png';

import {HiLocationMarker} from 'react-icons/hi'

// components
// import Search from '../components/Search';

import './Banner.css'

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
  // <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
  //   <div className='flex flex-col lg:flex-row'>
  //     <div className='lg-ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
  //       <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
  //         <span className='text-violet-700'>Rent</span> Your Dream House with Us.
  //       </h1>
  //       <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste pariatur temporibus fugit.</p>
  //     </div>
  //     <div className='hidden flex-1 lg:flex justify-end items-end'>
  //       <img src={Image} alt="" />
  //     </div>
  //   </div>
  //   <Search/>
  // </section>

  <section className="hero-wrapper bg-white text-gray-800 py-8 relative">
    <div className="white-gradient"/>
      <div className="hero-container flex justify-around items-end flex-wrap mx-auto p-[1.5rem] gap-y-[2rem]">
        <div className="hero-left flex flex-col items-start gap-8">
          <div className="hero-title relative z-10">
            <div className="orange-circle absolute " />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
              className="font-bold text-4xl leading-10"
            >
              Discover<br />Most Suitable<br />Property
            </motion.h1>
          </div>
          <div className="hero-des flex flex-col items-start gap-2">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          {/* <div className="search-bar flex items-center justify-between w-full bg-white rounded border border-gray-300 p-2">
            <HiLocationMarker color="#6d28d9" size={25} />
            <input type="text" className="border-none outline-none w-full" placeholder="Search" />
            <button className="button">Search</button>
          </div> */}
          <div className="stats flex justify-between w-full flex-wrap items-center">
            <div className="stat flex flex-col items-center">
              <span>
                <CountUp start={400} end={555} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="secondaryText">Products</span>
            </div>
            <div className="stat flex flex-col items-center">
              <span>
                <CountUp start={800} end={950} duration={4} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="stat flex flex-col items-center">
              <span>
                <CountUp end={25} />
                <span className="text-orange-500">+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right flex items-center">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
          >
            <img src="./hero-image.webp" alt="" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
