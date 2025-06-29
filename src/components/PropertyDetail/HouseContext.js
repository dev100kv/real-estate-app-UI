import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../../data';

export const HouseContext = createContext();



const HouseContextProvider = ({children}) => {
  const  [houses, setHouses] = useState(housesData);  
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false);

  // all countries
  useEffect(() =>{
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allCountries)


    // remove duplicates
    const uniqueCountries = ['Location (any)',...new Set(allCountries)]

    // set countries state
    setCountries(uniqueCountries);
  }, [houses]);

    // all properties
    useEffect(() =>{
      const allProperties = houses.map((house) => {
        return house.type;
      });
      // console.log(allProperties)
  
  
      // remove duplicates
      const uniqueProperties = ['Property (any)',...new Set(allProperties)]
  
      // set Properties state
      setProperties(uniqueProperties);
    }, [houses]);

    const handleClick = () =>{
      // set loading
      setLoading(true)

      // console.log(country, property, price)


      // creating a function that checks if the string includes '(any)'
      const isDefault = (str) =>{
        return str.split(' ').includes('(any)');

        
      };
      // console.log(isDefault(country))

      // get first value of price and parse it to number
      const minPrice = parseInt(price.split(' ')[0]);

      // get second value of price and parse it to number
      const maxPrice = parseInt(price.split(' ')[2]);

      const newHouses = housesData.filter((house) =>{
        const housePrice = parseInt(house.price);
        // console.log(parseInt(house.price))
        
        

        // if all values are selected
        if (
          house.country === country && 
          house.type === property && 
          housePrice >= minPrice && 
          housePrice <= maxPrice
        ) {
          return house;
        }

        
        // if all values are default
        if(isDefault(country) && isDefault(property) && isDefault(price))
        {
          return house;
        }

        // if country is not default
        if(!isDefault(country) && isDefault(property) && isDefault(price))
        {
          return house.country === country;
        }

        // if property is not default
        if(!isDefault(property) && isDefault(country) && isDefault(price))
        {
          return house.type === property;
        }

        // if price is not default
        if(!isDefault(price) && isDefault(country) && isDefault(property))
        {
          if(housePrice >= minPrice && housePrice <= maxPrice)
          return house;
        }

        // if country & property is not default
        if(!isDefault(country) && !isDefault(property) && isDefault(price))
        {
          return house.country === country && house.type === property;
        }


        // if country and price is not default
        if(!isDefault(country) && isDefault(property) && !isDefault(price))
        {
          if(house.price >= minPrice && house.price<=maxPrice)
          return house.country === country;
        }

        // if property and price is not default
        if(isDefault(country) && !isDefault(property) && !isDefault(price))
        {
          if(house.price >= minPrice && house.price<=maxPrice)
          return house.type === property;
        }


      });
      // return newHouses; 
      console.log(newHouses)

      setTimeout(()=>{
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false);
      }, 1000)

    };

  return(
    <HouseContext.Provider 
      value={{country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
    )
};

export default HouseContextProvider;
