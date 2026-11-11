import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    image: "/images/laptop.jpg"
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 1500,
    image: "/images/headphones1.jpg"
  },
  {
    id: 3,
    name: "Notebook",
    category: "Stationery",
    price: 60,
    image: "/images/notebook.jpg"
  },
  {
    id: 4,
    name: "Pen",
    category: "Stationery",
    price: 10,
    image: "/images/pen.jpg"
  },
  {
    id: 5,
    name: "Backpack",
    category: "Accessories",
    price: 900,
    image: "/images/backpack.jpg"
  },
  {
    id: 6,
    name: "Watch",
    category: "Accessories",
    price: 2500,
    image: "/images/watch.jpg"
  }
];

function App() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Product Catalog</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list">

        {filtered.length === 0 ? (
          <p className="no-products">No products found</p>
        ) : (
          filtered.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              category={p.category}
              price={p.price}
              image={p.image}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default App;
