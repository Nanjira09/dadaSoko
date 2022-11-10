import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default function AppProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const toggleModal = () => setShowModal(!showModal);
  const addToCart = ({ id, title, image, price, qty = 1 }) => {
    let item = {
      id,
      title,
      image,
      price,
      qty,
    };
    const itemExists = products.findIndex((product) => product.id === id);
    if (itemExists === -1) {
      setProducts((prev) => [...prev, item]);
    } else {
      const item = products[itemExists];
      let newItem = {
        ...item,
        qty: item.qty + 1,
      };
      const allItems = products.slice();
      allItems.splice(itemExists, 1, newItem);
      setProducts(allItems);
    }
  };

  const deleteFromCart = (id) => {
    const itemExists = products.findIndex((product) => product.id === id);
    const item = products[itemExists];
    const allItems = [...products];
    if (item.qty === 1) {
      allItems.splice(itemExists, 1);
      setProducts(allItems);
    } else {
      let newItem = {
        ...item,
        qty: item.qty - 1,
      };
      allItems.splice(itemExists, 1, newItem);
      setProducts(allItems);
    }
  };
  return (
    <StoreContext.Provider
      value={{ showModal, toggleModal, products, addToCart, deleteFromCart }}
    >
      {children}
    </StoreContext.Provider>
  );
}
