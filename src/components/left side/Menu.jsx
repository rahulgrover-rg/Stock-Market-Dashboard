import React, { useState } from 'react' ;
import { NavLink } from 'react-router-dom';
import { menuItems } from '../../data';
import { menuIcons } from '../../data';

const Menu = () => {
  const [selectedItem , setSelectedItem] = useState(0) ;

  return (
    <div className='Menu flex flex-col items-center gap-y-3 bg-white pt-5 pb-16 rounded-lg max-w-[300px]'>
      {menuItems.map((menuItem , index) => (
        <div className={`w-5/6 py-2 px-3 ${index===selectedItem ? 'bg-[rgb(80,50,139)] text-white' : 'bg-white'} ${index===selectedItem ? '' : menuItem===0 ? '' : 'hover:bg-slate-200' } transition-all ease-out duration-100 rounded-md`}>{menuItem === 0 ? '' : (
          <NavLink to={`/${menuItem.toLowerCase() === 'dashboard' ? '' : menuItem.toLowerCase()}`}>
            <button key={index} onClick={() => (setSelectedItem(index))} className='flex text-left'>
            <img src={menuIcons[index]} alt='icon' className={`h-[26px] mr-2 object-contain ${index === selectedItem ? 'fill-white' : ''}`}/>{menuItem}
            </button>
          </NavLink>
          
        )}</div>
      ))}
    </div>
  )
}

export default Menu ;