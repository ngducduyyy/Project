import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
   const navMenu = [
      {
         title: "Home",
         url: "/",
      },
      {
         title: "List anime",
         url: "/ListAnime",
      },
   ];
   return (
      <nav id="nav" className="w-full top-0 fixed bg-[#1a1927]/90 backdrop-blur-sm shadow z-50">
         <div className="justify-between container md:items-center md:flex md:px-8">
            <div>
               <div className="flex items-center justify-between py-3 md:py-8 md:block">
                  <Link to="/">
                     <h2 id="logo" className="text-4xl font-bold text-white font-josefin">Aniflix</h2>
                  </Link>
               </div>
            </div>
            <div className="md:ml-20">
               <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}>
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                     {navMenu.map((menu, index) => (
                        <li key={index} className="text-white group text-center relative">
                           <Link to={menu.url}>{menu.title}</Link>
                           <div className="w-0 h-[2px] rounded-sm  group-hover:w-full transition-all duration-200 ease-in-out absolute bg-red-500 "></div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <form className="ml-auto"><input className="px-4 py-2 outline-none bg-red-800 rounded-full text-white" type="text" placeholder="Search..."/></form>
         </div>
      </nav>
   );
}
