import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {BiMenuAltRight} from 'react-icons/bi';

import OutsideClickHandler from 'react-outside-click-handler';

import './Header.css'

// logo
import Logo from '../../assets/img/logo.png'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && '125%'}
    }
  }

  return (
  <header className='py-3 bg-[#131110]'>
    <div className="container mx-auto flex justify-between items-center px-6">
      <Link to='/'>
        <img className='max-h-[80px]' src={Logo} alt="" />
      </Link>
      <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
        <div className="flex items-center gap-6 h-menu" style={getMenuStyles(menuOpened)}>
          <Link className='lg:hover:text-white text-white transition lg:py-[23px] px-[10px]' to='/Residencies'>Residecies</Link>
          {/* <Link className='lg:hover:text-white text-white transition lg:py-[23px] px-[10px]' to='#values'>Our Values</Link> */}
          <Link className='btn bg-violet-700 hover:bg-violet-800 text-white px-[1.4rem] py-[0.6rem] rounded-[4px] transition' to='/'>Contact</Link>
        </div>

        <div className="menu-icon text-[#ffffffc7]" onClick={()=> setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </OutsideClickHandler>

    </div>
  </header>
  )
};

export default Header;
