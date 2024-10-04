import img1 from "../assets/img1.svg";
import textLogo from "../assets/textLogo.svg";
import Navbar from "./Navbar";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SetStateAction, useEffect } from "react";
import TableForm from "../pages/Table/TableForm";


interface homeProp{
  setShowForm : React.Dispatch<SetStateAction<boolean>>,
  showForm:boolean
}

const Home = ({setShowForm,showForm}:homeProp) => {

  useEffect(()=>{
    Aos.init({
     offset:200,
     duration:800,
     easing:'ease-in-sine',
     delay:200,
    });
},[])

  return (
    <div className={`w-full h-[100vh] p-2 ${showForm && 'bg-gray-300'}`}>
       <TableForm showForm={showForm} setShowForm={setShowForm}/>
      <Navbar setShowForm={setShowForm} showForm={showForm}/>
       

      <img data-aos='zoom-in' data-aos-delay='300' src={textLogo} alt="textLogo" className="w-10 left-32 top-16 relative"   />

      <div className="flex px-15 py-5 -mt-10 justify-center">
        <div className="w-[25vw] p-8 text-start mt-20 space-y-8">
          <h2 className="text-4xl font-bold mb-10 w-80">
            We provide the best food for you
          </h2>
 
          <p className="w-80 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eum eos quaerat minima beatae! Ut quaerat obcaecati qui. Quod fugiat
            repudiandae esse animi velit.
          </p>
          <div className="flex gap-4">
            <button className="bg-black px-4 py-2 text-white rounded-tl-xl rounded-br-xl">
              Menu
            </button>
            <button className="bg-customOrange px-4 py-2 text-white rounded-tl-xl rounded-br-xl">
              Book a table
            </button>
          </div>

          <ul className="flex gap-4">
            <li className="text-3xl cursor-pointer hover:text-red-900"><CiFacebook  /></li>
            <li className="text-3xl cursor-pointer hover:text-red-900"> <CiInstagram /></li>
            <li className="text-3xl cursor-pointer hover:text-red-900"><CiTwitter /></li>
          </ul>
        </div>

        <div className="w-2/5">
          <img data-aos='zoom-in' id="homeImg" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
