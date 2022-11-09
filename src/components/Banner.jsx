import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

function Banner({ product }) {
  return (
    <div className="flex h-[600px] my-4">
      <div className="flex-1 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          src={product?.image}
          className="h-full w-full object-contain"
          alt={product?.title}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 0.5 }}
        className="flex-1 flex flex-col space-y-3 justify-center p-4"
      >
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
      </motion.div>
    </div>
  );
}

export default Banner;
