import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../requests";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
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
  }, [filter]);

  useEffect(() => {
    (async () => {
      const results = await fetchProducts();
      setProducts(results);
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar categories={categories} setFilter={setFilter} />
      <Banner product={products[0]} />
      <Container products={filteredProducts} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
