import React, { SetStateAction } from "react";
import logo from "../assets/logo.svg";

interface navbarProp {
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
  showForm:boolean
}

const Navbar = ({ setShowForm,showForm }: navbarProp) => {

  return (
    <nav className="flex justify-between px-6 py-5 items-center">
      <img src={logo} alt="logo" className="w-36 -mt-3" />
      <ul className="flex space-x-8 text-sl text-slate-600 font-semibold">
        <li>Menu</li>
        <li>Events</li>
        <li>Gallary</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button
        className="bg-customOrange px-5 py-3 rounded-tl-xl rounded-br-xl text-white font-semibold drop-shadow-xl"
        onClick={() => setShowForm(!showForm)}
      >
        Book a table
      </button>
    </nav>
  );
};

export default Navbar;
