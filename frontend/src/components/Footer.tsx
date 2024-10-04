import footerImg from "../assets/footer.svg";
import Contact from "./Contact";
import logo from "../assets/logo.svg";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <Contact />
        <div
          // style={{ backgroundImage: `url(${footerImg})` }}
          className="w-3/4 bg-contain bg-center bg-no-repeat bg-white flex text-start justify-between m-auto pr-20 pt-20 pb-10"
        >
          <img src={footerImg} alt="" className="absolute" />
          <div className="flex flex-col gap-7 ">
            <img src={logo} alt="" className="w-44" />
            <p className="w-96 text-start text-md text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit id
              cumque quod, ipsam harum totam eligendi accusantium porro.{" "}
              <span className="underline cursor-pointer">Learn more</span>
            </p>
            <p className="text-sm font-bold">OPENING HOURS</p>
            <div className="grid grid-cols-3 gap-3 text-start text-md text-slate-700">
              <p>Monday - Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
              <p>8:00 am to 9:00 am</p>
              <p>8:00 am to 9:00 am</p>
              <p>CLOSED</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-sm font-bold">NAVIGATION</p>
            <p className="text-slate-700">Menu</p>
            <p className="text-slate-700">About us</p>
            <p className="text-slate-700">Contact us</p>
            <p className="text-slate-700">Main dishes</p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-sm font-bold">DISHES</p>
            <p className="text-slate-700">Fish & Viggies</p>
            <p className="text-slate-700">Tofu Chili</p>
            <p className="text-slate-700">Egg & Cocumber</p>
            <p className="text-slate-700">Lumpia w/Suace</p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-sm font-bold">FOLLOW US</p>
            <ul className="flex justify-center items-center gap-3">
              <li className="text-4xl cursor-pointer hover:text-red-900">
                <CiFacebook />
              </li>
              <li className="text-4xl cursor-pointer hover:text-red-900">
                <CiInstagram />
              </li>
              <li className="text-4xl cursor-pointer hover:text-red-900">
                <CiTwitter  />
              </li>
            </ul>
          </div>
        </div>
        <hr className=" w-3/4 m-auto " />

        <div className="w-3/4 m-auto flex justify-between pr-20 py-4">
          <p className="text-sm text-slate-700">
            {" "}
            © 2022 Restaurants. All Right Reserved. Designed by{" "}
            <span className="font-bold">Isaac</span>{" "}
          </p>
          <div className="flex text-sm text-slate-700 gap-2">
            <p>Term of Service</p>
            <p> Privacy Policy</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
