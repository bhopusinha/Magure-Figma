import styles from "../styles/global.module.css";
import { IoStar } from "react-icons/io5";
import { testiMonialType } from "../types/testi";


interface testiMonialProp{
  data:testiMonialType
}


const CustomerCard = ({data}:testiMonialProp) => {
  return (
    <div
      className={`inline-block ${styles.customerCard} w-2/3 border-2 p-6 pb-12 static shadow-md bg-white`}
    >
      <div className="relative -top-16 left-44 flex flex-col items-start">
        <img
          src={data.image}
          alt=""
          className={`rounded-3xl w-32 h-28`}
        />
        <p className="flex text-customOrange">
          <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />{" "}
        </p>
      </div>
      <div className="space-y-5 -mt-5">
        <p className="text-gray-700 text-pretty">
          {data.comments}
        </p>
        <div className="flex flex-col text-center gap-1">
          <p className="font-semibold">{data.name}</p>
          <p className="font-thin">CEO & Founder at {data.cFounder}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
