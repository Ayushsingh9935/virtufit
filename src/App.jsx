

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* Layout Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TryOn from "./pages/TryOn";
import SizeRecommender from "./pages/SizeRecommender";

/* =========================
   APP COMPONENT
========================= */
function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-dark-300 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* User Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/try-on" element={<TryOn />} />
            <Route path="/size-recommender" element={<SizeRecommender />} />

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
                  <h1 className="text-5xl font-bold mb-4">404</h1>
                  <p className="text-gray-400 text-lg">Page not found</p>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
