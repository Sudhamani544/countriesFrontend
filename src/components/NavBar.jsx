import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Countries
          </span>
        </div>

        <div className="w-full px-4 block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="relative text-sm lg:flex-grow">
            <input
              className="bg-purple-400 placeholder-yellow-800 w-80  "
              placeholder="         Search.."
            />
            <div className="absolute bottom-0 pl-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div>
            <a
              href="#"
              className="inline-block px-4 py-2 leading-none text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
