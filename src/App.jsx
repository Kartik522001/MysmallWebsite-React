import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Service from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;