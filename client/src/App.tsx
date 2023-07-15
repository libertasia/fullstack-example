import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Form from "./components/users/AccountRegisterForm";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;
