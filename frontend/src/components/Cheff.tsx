import { useEffect } from "react";
import cheff from "../assets/chef.svg";
import { FaCheckCircle } from "react-icons/fa";
import Aos from "aos";

const Cheff = () => {

  
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <div className="h-[100vh] flex justify-center p-10">
      <div className="w-5/6 flex justify-center items-center gap-4">
        <div data-aos='fade-right' className="space-y-8 w-2/3">
          <h1 className="text-5xl font-bold mb-10">Our Expects Chef</h1>
          <p className="w-1/2 text-sm text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            debitis! Eaque architecto minus illum sed impedit fuga doloribus
            officiis reprehenderit.
          </p>
          <div id="grid" className="grid grid-cols-2" >
           <div className="flex items-center text-start justify-center gap-2">
            <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           <div className="flex items-center text-start justify-center gap-2">
                 <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           <div className="flex items-center text-start justify-center gap-2">
                 <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           <div className="flex items-center text-start justify-center gap-2">
                 <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           <div className="flex items-center text-start justify-center gap-2">
                 <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           <div className="flex items-center text-start justify-center gap-2">
                 <li className="text-2xl list-none text-customOrange"><FaCheckCircle/></li>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-black px-4 py-2 text-white rounded-tl-xl rounded-br-xl drop-shadow-xl">
              Menu
            </button>
            <button className="bg-customOrange px-4 py-2 text-white rounded-tl-xl rounded-br-xl drop-shadow-xl">
              Book a table
            </button>
          </div>
        </div>

        <div>
          <img data-aos='zoomi-in' src={cheff} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cheff;
