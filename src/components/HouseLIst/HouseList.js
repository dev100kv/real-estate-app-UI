import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// icons
import  {ImSpinner2} from 'react-icons/im'

// import context
import { HouseContext } from '../PropertyDetail/HouseContext';

// import components
import House from '../House/House';
import Search from '../Search/Search';

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);

  // if loading is true
  if(loading){
    return(
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl flex items-center justify-center min-h-[70vh]' />
    )
  }

  if(houses.length < 1){
    return <div className='text-center text-3xl text-gray-400 flex items-center justify-center min-h-[70vh]'>Sorry! Nothing Found</div>
  }


  // console.log(houses)
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {houses.map((house, index)=>{
              return <Link to={`/property/${house.id}`} key={index} >
                <House house={house}/>
              </Link>
            })}
          </div>
        </div>
      </section>
    </>
  )
};

export default HouseList;
