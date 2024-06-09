import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

import { menuItems } from "../data";
import React,{useState} from "react";
import { NavLink } from "react-router-dom";

  export default function MenuDefault() {
    const [selectedItem , setSelectedItem] = useState(0) ;
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-violet-800 py-2 tracking-wide outline-none border-none w-[50px] sm:w-full sm:px-5 text-xs px-1 font-normal sm:font-bold">Menu</Button>
        </MenuHandler>
        <MenuList className="w-[150px] flex flex-col gap-y-1 py-3 items-center outline-none border-none">
          {menuItems.map((menuItem , index) => (
            menuItem ? (<MenuItem onClick={()=>setSelectedItem(index)} className={`py-1 w-4/5 ${index===selectedItem ? 'bg-[rgb(80,50,139)] text-white' : 'bg-white'} transition-all ease-out duration-100 rounded-md`}>
              <NavLink to={`/${menuItem.toLowerCase() === 'dashboard' ? '' : menuItem.toLowerCase()}`}>
                {menuItem}
              </NavLink>
            </MenuItem>) : ''
        ))}
        </MenuList>
      </Menu>
    );
  }