import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Newsletter() {
  return (
    <div className="flex flex-col space-y-3 py-8 items-center bg-[#ADA89F] justify-center m-7">
      <h3 className="font-bold text-xl uppercase tracking-widest">
        Newsletter
      </h3>
      <p className="text-sm text-gray-600 tracking-wider">
        Sign up to our newsletter to find out about new products, sales, blog
        posts, and more.
      </p>
      <div className="flex items-center bg-white w-1/2 h-10 my-3">
        <input
          type="text"
          placeholder="email@example.com"
          className="flex-1 h-full px-1 outline-none"
        />
        <span className="flex items-center bg-black cursor-pointer h-full text-white uppercase px-4 text-sm font-thin">
          subscribe <FaChevronRight size={12} />
        </span>
      </div>
    </div>
  );
}

export default Newsletter;
