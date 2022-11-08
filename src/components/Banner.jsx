import React from "react";
import { FaPlus } from "react-icons/fa";

function Banner({ product }) {
  return (
    <div className="flex h-[500px] my-4">
      <div className="flex-1 overflow-hidden">
        <img
          src={product?.image}
          className="h-full w-full object-contain"
          alt={product?.title}
        />
      </div>
      <div className="flex-1 flex flex-col space-y-3 justify-center p-4">
        <h2 className="font-bold text-xl tracking-wide uppercase">
          {product?.title}
        </h2>
        <p className="text-sm text-gray-500">{product?.description}</p>
        <p className="text-lg font-semibold tracking-wider">
          ${product?.price}
        </p>
        <button className="bg-slate-200 text-gray-500 hover:text-opacity-30 flex items-center justify-center uppercase p-2 cursor-pointer">
          Add to cart <FaPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
