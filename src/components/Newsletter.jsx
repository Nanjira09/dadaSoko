import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, easing: "easeOut" }}
      className="flex flex-col space-y-3 py-8 px-4 items-center bg-[#ADA89F] justify-center m-7"
    >
      <h3 className="font-semibold text-sm md:font-bold md:text-xl uppercase tracking-widest">
        Newsletter
      </h3>
      <p className="text-sm text-gray-600 tracking-wider">
        Sign up to our newsletter to find out about new products, sales, blog
        posts, and more.
      </p>
      <div className="flex items-center bg-white max-w-2xl h-10 my-3">
        <input
          type="text"
          placeholder="email@example.com"
          className="flex-1 h-full px-1 outline-none"
        />
        <span className="flex items-center bg-black cursor-pointer h-full text-white uppercase px-4 text-sm font-thin">
          subscribe <FaChevronRight size={12} />
        </span>
      </div>
    </motion.div>
  );
}

export default Newsletter;
