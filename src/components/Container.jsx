import React from "react";
import { FaPlus } from "react-icons/fa";

function Container({ products }) {
  return (
    <div className="my-10">
      <h2 className="uppercase font-bold text-2xl tracking-wider text-center">
        Featured Collection
      </h2>
      <div className="flex flex-wrap justify-evenly p-3 my-3">
        {products.map((product) => (
          <div
            className="max-h-[300px] max-w-[300px] flex flex-col shadow-lg group my-5 cursor-pointer"
            key={product.id}
          >
            <div className="flex-1 overflow-hidden relative">
              <img
                src={product?.image}
                className="h-full w-full object-contain"
                alt={product?.title}
              />
              <button className="absolute bottom-0 left-0 right-0 py-2 px-4 uppercase hidden group-hover:flex justify-center items-center bg-black text-slate-400 hover:text-opacity-50">
                Add to cart <FaPlus className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center py-2 px-4">
              <p className="text-center font-semibold text-sm">
                {product?.title}
              </p>
              <p>${product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
