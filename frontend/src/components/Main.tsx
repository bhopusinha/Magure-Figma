import { useEffect, useState } from "react";
import plateImg from "../assets/plate.svg";
import styles from "../styles/global.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHttpMethodContext } from "../context/HttpContextProvider";

interface foodType {
  _id: string;
  name: string;
  description: string;
  image: string;
}

const Main = () => {
  const [food, setFoods] = useState<foodType[]>([]);

  const { get } = useHttpMethodContext();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  useEffect(() => {
    async function fetchFood() {
      const response = await get(
        `https://food-delivery-mern-yufg.onrender.com/api/food/list`
      );

      if (response.success) {
        setFoods(response.response as foodType[]);
      }
    }

    fetchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-fit bg-customBgColor space-y-20 py-10">
      <div className="m-auto w-80 space-y-4 text-start pt-10">
        <h2 className="text-4xl font-bold">Our Special Dishes</h2>
        <p className="text-sm w-64 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore
          quo.
        </p>
      </div>

      <div
        className={`${styles.wrapper} flex space-x-8 mt-16 w-1/2 overflow-x-auto m-auto rounded`}
      >
        {food &&
          food.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-52 min-h-80 b p-4 cursor-pointer border-solid border-2 rounded"
            >
              <img
                src={
                  `https://food-delivery-mern-yufg.onrender.com/images/` +
                  item.image
                }
                alt=""
                className="rounded-full w-36"
              />
              <p className="text-xl text-center font-semibold mt-4">
                {item.name}
              </p>
              <p className="text-sm text-center mt-7">{item.description}</p>
            </div>
          ))}
      </div>

      <div id="restorent" className="flex px-15 py-5 -mt-10 justify-center">
        <img
          data-aos="zoom-in"
          id="mainImg"
          src={plateImg}
          alt=""
          className="w-2/5"
        />
        <div
          data-aos="fade-left"
          id="mainText"
          className="w-[25vw] p-8 text-start mt-20 space-y-8"
        >
          <h1 className="text-4xl font-bold mb-10 w-80">
            Welcome to our Restaurent
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            maxime laborum. Quo dolor fugit quam. Dolore, magnam aut.
          </p>
          <div className="flex gap-4">
            <button className="bg-black px-4 py-2 text-white rounded-tl-xl rounded-br-xl drop-shadow-xl">
              Menu
            </button>
            <button className="bg-customOrange px-4 py-2 text-white rounded-tl-xl rounded-br-xl drop-shadow-xl">
              Book a table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
