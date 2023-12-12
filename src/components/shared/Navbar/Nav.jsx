import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdPerson3 } from "react-icons/md";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute  z-50 top-16 w-full h-[700px] left-0 right-0 bg-slate-700 transition ">
        <ul className="text-center text-xl p-6">
          <Link to={"/"} onClick={handleClick}>
            <li className="my-4 py-3 hover:text-yellow-500 hover:rounded">
              Home
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="my-4 py-3 hover:text-yellow-500 hover:rounded">
             Products
            </li>
          </Link>
          <Link to={"/featured"}>
            <li className="my-4 py-3 hover:text-yellow-500  hover:rounded">
              Featured
            </li>
          </Link>
         
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <Link to={"/"}>
            <span className="text-3xl font-bold text-yellow-500">E-DOKAN</span>
          </Link>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-1">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 "
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500"
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/featured"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500"
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
                  Featured
                </NavLink>
              </li>
           
            </ul>
         
       
          </div>
          <ul className="flex gap-4 mr-16 text-[18px]">
            <li>
            <NavLink
                  to={"/featured"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500"
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
                 <FaRegHeart className="relative"  />
                 <sup className="absolute ml-5 text-md mt-8 text-yellow-500">0</sup>
                </NavLink>
            </li>
            <li>
            <NavLink
                  to={"/featured"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500"
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
               <MdOutlineShoppingCart className="relative" /> 
               <sup className="absolute ml-5 text-md mt-8 text-yellow-500">0</sup>
               
                </NavLink>
                </li>
            <li>
            <NavLink
                  to={"/signup"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500"
                      : "cursor-pointer hover:text-yellow-500"
                  }
                >
               <MdPerson3 /> 
                </NavLink>
            </li>
         </ul>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition " onClick={handleClick}>
          {click ? (
            <FaTimes className="text-yellow-500 text-2xl" />
          ) : (
            <CiMenuFries className="text-yellow-500 text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
