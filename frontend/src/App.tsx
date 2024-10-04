import Cheff from "./components/Cheff";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [showForm,setShowForm]=useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home setShowForm={setShowForm} showForm={showForm} />
            <Main />
            <Cheff />
            <Customer />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
