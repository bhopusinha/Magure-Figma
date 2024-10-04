import { useEffect } from "react";
import promo from "../assets/promo.svg";
import styles from '../styles/global.module.css';
import Aos from "aos";

const Contact = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);


  return (
    <div data-aos='zoom-in' className="flex justify-center text-center h-96 -mt-20">
      <div
        style={{ backgroundImage: `url(${promo})` }}
        className="bg-contain bg-no-repeat w-3/4 rounded-3xl flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-serif text-white">Get Or Promo Code by </h1>
        <h2 className="text-4xl font-serif text-white">Subscribing To our Newsletter</h2>

        <div id="contact-email" className="absolute flex mt-52 ml-20 items-center" >
          <input type="email" name="email" id="email" placeholder="Enter Your Email" required className={`${styles.inputWidth} py-4 px-8 rounded-lg outline-none border-none`} />
          <button className="font-semibold text-sm text-white bg-customOrange px-6 h-11 rounded-lg relative right-24">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
