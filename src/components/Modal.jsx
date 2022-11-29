import React, { useContext } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../context";
import { toast } from "react-toastify";

function Modal() {
  const { toggleModal, products, addToCart, deleteFromCart } =
    useContext(StoreContext);
  const notify = () => toast("Not implemented yet!!");

  const total = products.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <AnimatePresence>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-40 h-screen w-screen">
        <motion.div
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: "50%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white max-w-2xl mx-auto"
        >
          <div className="relative p-4 bg-[#adabab]">
            <h2 className="uppercase font-bold tracking-wider text-lg text-center">
              Shopping Cart
            </h2>
            <FaTimes
              onClick={() => toggleModal()}
              size={28}
              color="#787676"
              className="absolute top-4 cursor-pointer right-2"
            />
          </div>
          {products.length > 0 ? (
            <>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center mx-4 my-3"
                >
                  <div className="flex flex-1 justify-between items-center">
                    <div className="h-12 w-12">
                      <img
                        src={product.image}
                        className="h-full w-full object-contain"
                        alt={product?.title}
                      />
                    </div>
                    <p className="flex-1">{product.title}</p>
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center border border-[#d8d5d5]">
                      <button
                        onClick={() => deleteFromCart(product.id)}
                        className="flex p-1 cursor-pointer justify-center items-center border-r"
                      >
                        -
                      </button>
                      <span className="p-1">{product.qty}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="flex p-1 cursor-pointer justify-center items-center border-l"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold">
                      ${product.price * product.qty}
                    </p>
                  </div>
                </div>
              ))}
              <div className="py-2 border-t border-[#d8d5d5] mt-2 mx-4">
                <div className="flex justify-between items-center my-3">
                  <p className="text-sm ">
                    Shipping & taxes calculated at checkout
                  </p>
                  <p className="font-semibold">SUBTOTAL ${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between space-x-2 items-center">
                  <button
                    onClick={() => toggleModal()}
                    className="bg-[#c2c1c1] uppercase text-sm py-3 flex-1"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={notify}
                    className="flex-1 bg-black text-white text-sm uppercase py-3"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col space-y-3 mx-4 py-4">
              <p className="text-center tracking-widest">
                YOUR CART IS CURRENTLY EMPTY.
              </p>
              <FaShoppingCart
                size={48}
                color="#d8d5d5"
                className="text-lg self-center"
              />
              <button
                onClick={() => toggleModal()}
                className="bg-black uppercase p-3 text-white"
              >
                Shop Now
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Modal;
