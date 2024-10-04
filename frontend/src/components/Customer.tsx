import { useEffect, useState } from "react";
import happy from "../assets/happy.svg";
import styles from "../styles/global.module.css";
import CustomerCard from "./CustomerCard";
import useTestimonial from "../hooks/api/usetTestimonial";
import { testiMonialType } from "../types/testi";

const Customer = () => {
  
  const [testi, setTesti] = useState<testiMonialType[]>([]);

  const {getTestimonial} =useTestimonial();

  useEffect(()=>{
    
    async function getTesti(){
        const response = await getTestimonial();

        if(response.success){
          setTesti(response.response as testiMonialType[])
          // console.log(response.response);
        }
    }

    getTesti();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div id="customer" className="h-[100vh] py-6 bg-customBgColor">
      <img src={happy} alt="" className="absolute w-96" />
      <h1 className="text-5xl text-black font-serif text-center font-bold">
        Our Happy Customers
      </h1>
      <p className="w-96 m-auto text-center text-sm text-gray-900 p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        inventore expedita deserunt, nemo ipsa architecto?
      </p>
      <div
        className={`${styles.wrapper} mt-16 ml-80 text-center flex gap-10 overflow-x-scroll p-10`}
      >
        {testi && testi.map((item) => (
          <CustomerCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Customer;
