import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { image, title, price, category, description, id } = props;
  return (
    <>
      <Link
        to={`/detail/${id}`}
        className="transition-transform duration-300 hover:scale-105"
      >
        <div className="card w-[350px] md:w-72 bg-base-100">
          <figure className="w-[220px] h-[250px] mt-10 mx-auto md:mt-0">
            <img
              src={image}
              alt={title}
              className="h-[240px] md:h-[170px] object-fill"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title justify-end font-normal text-sm tracking-wider">
              {category}
            </h1>
            <p className="text-sm font-medium tracking-[2px] leading-normal">
              {title.substring(0, 20)}...
            </p>
            <p className="text-base font-bold tracking-[2px] leading-normal">
              {price}$
            </p>
            <p className="text-[12px] font-medium tracking-[2px] leading-normal">
              {description.substring(0, 20)}...
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
