import { FormEvent, useEffect, useState } from "react";
import promo from "../assets/promo.svg";
import styles from "../styles/global.module.css";
import Aos from "aos";
import useEmail from "../hooks/api/useEmail";

const Contact = () => {
  const [email, setEmail] = useState<string>("");

  const { sendMail } = useEmail();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  const onSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await sendMail(email);

    if (response.success) {
      alert(response.response);
      setEmail("");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="flex justify-center text-center h-96 -mt-20"
    >
      <div
        style={{ backgroundImage: `url(${promo})` }}
        className="bg-contain bg-no-repeat w-3/4 rounded-3xl flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-serif text-white">
          Get Or Promo Code by{" "}
        </h1>
        <h2 className="text-4xl font-serif text-white">
          Subscribing To our Newsletter
        </h2>

        <form
          id="contact-email"
          className="absolute flex mt-52 ml-20 items-center"
          onSubmit={onSendEmail}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            required
            className={`${styles.inputWidth} py-4 px-8 rounded-lg outline-none border-none`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="font-semibold text-sm text-white bg-customOrange px-6 h-11 rounded-lg relative right-24"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
