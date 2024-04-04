import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white p-4 flex justify-between items-center relative">
      <div className="flex flex-row space-x-2 justify-between align-left items-start text-left origin-left">
        {/* Side menu icon for mobile */}
        <div className="block md:hidden mt-0 self-center">
          <button onClick={toggleMenu} className="text-white ml-4">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="w-24" src="./Logo.png" alt="Logo" />
        </div>
      </div>

      {/* Navigation links in the middle (visible on large screens) */}
      <ul
        className={`hidden md:flex mt-4 md:mt-0 md:flex-grow md:justify-center md:text-l md:font-regular`}
      >
        <li className="mr-4 lg:mr-8">
          <a href="#">
            Home
          </a>
        </li>
        <li className="mr-4 lg:mr-8">
          <a href="#">
            Company
          </a>
        </li>
        <li className="mr-4 lg:mr-8">
          <a href="#">
            Solutions
          </a>
        </li>
      </ul>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-[130vh] w-60 bg-gray-900 p-8 z-50">
            <ul className="text-white">
              <li>
                <button onClick={toggleMenu} className="text-white mb-4">
                  {<span className="text-3xl">&#10005;</span>}
                </button>
              </li>
              <li className="mb-4">
                <a onClick={toggleMenu} href="#">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a onClick={toggleMenu} href="#">
                  Company
                </a>
              </li>
              <li className="mb-4">
                <a onClick={toggleMenu} href="#">
                  Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact us button on the right */}
      <div className="block">
        <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded-full border-white border-2">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
