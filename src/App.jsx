import { useContext, useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../requests";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { StoreContext } from "./context";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const { showModal } = useContext(StoreContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetchCategories();
      setCategories(results);
    })();
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredProducts(products);
    } else {
      const items = products.filter((product) => product.category === filter);
      setFilteredProducts(items);
    }
  }, [filter, products]);

  useEffect(() => {
    (async () => {
      const results = await fetchProducts();
      setProducts(results);
    })();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <ToastContainer position="top-center" autoClose="2000" />
      <Navbar categories={categories} setFilter={setFilter} />
      {showModal && <Modal />}
      {products.length > 0 && (
        <>
          <Banner product={products[0]} />
          <Container products={filteredProducts} />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
