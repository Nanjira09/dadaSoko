import React, { useContext } from "react";
import { FaSistrix } from "react-icons/fa";
import { StoreContext } from "../context";

function Navbar({ categories, setFilter }) {
  const { toggleModal, products } = useContext(StoreContext);
  const handleChange = (cat) => {
    setFilter(cat);
  };

  return (
    <div className="bg-[#ADA89F] h-16 flex justify-between items-center px-3 z-40 fixed left-0 right-0 top-0">
      <div>
        <h2 className="font-bold text-2xl tracking-widest italic -skew-y-12">
          Soko
        </h2>
      </div>
      <div className="hidden md:flex items-center h-full space-x-3">
        <p
          className="font-semibold cursor-pointer hover:opacity-30 transition ease-in delay-150"
          onClick={() => setFilter("")}
        >
          All
        </p>
        {categories.map((category, index) => (
          <p
            key={index}
            className="font-semibold cursor-pointer capitalize hover:opacity-30 transition ease-in delay-150"
            onClick={() => handleChange(category)}
          >
            {category}
          </p>
        ))}
      </div>
      <div className="flex items-center h-full space-x-2">
        <FaSistrix className="cursor-pointer hover:opacity-30 transition ease-out delay-100" />
        <p
          onClick={() => toggleModal()}
          className="font-semibold cursor-pointer hover:opacity-30 transition ease-out delay-100"
        >
          Cart ({products.length})
        </p>
      </div>
    </div>
  );
}

export default Navbar;
