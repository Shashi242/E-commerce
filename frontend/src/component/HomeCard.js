import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";


const HomeCard = ({ name, image, category, price, loading,id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px] box homecard">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>{window.scrollTo({top:"0",behavior : "smooth"}); localStorage.setItem("productid",id)}} >
          <div className="w-40 min-h-[150px]">
            <img src={image} className="h-full w-full" style={{height: "150px"}} />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500  font-medium">{category}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
