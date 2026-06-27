/**
 * SizeRecommender.jsx - Smart Size Recommender
 * Fully corrected for React + Vite + Tailwind v4
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Ruler,
  User,
  ChevronDown,
  Calculator,
  CheckCircle2,
  Info,
  Sparkles,
  BarChart3,
  RefreshCcw,
} from "lucide-react";

/* =========================
   DATA
========================= */
const brands = [
  "Levi's",
  "H&M",
  "Zara",
  "Nike",
  "Adidas",
  "Uniqlo",
  "Mango",
  "Gap",
  "Tommy Hilfiger",
  "Calvin Klein",
];

const categories = [
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Trousers",
  "Jackets",
  "Dresses",
  "Hoodies",
  "Skirts",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

/* =========================
   COMPONENT
========================= */
function SizeRecommender() {
  /* FORM STATE */
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    brand: "",
    category: "",
    fit: "regular",
  });

  /* RESULT STATE */
  const [result, setResult] = useState(null);

  /* LOADING */
  const [loading, setLoading] = useState(false);

  /* =========================
     HANDLE INPUT
  ========================= */
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setResult(null);
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    /* Fake AI Calculation */
    setTimeout(() => {
      setLoading(false);

      setResult({
        recommendedSize: "M",
        confidence: 94,
        fitAnalysis: {
          chest: {
            fit: "perfect",
            note: "Ideal fit around chest",
          },
          waist: {
            fit: "slightly_loose",
            note: "Comfortable room at waist",
          },
          length: {
            fit: "perfect",
            note: "Optimal length for height",
          },
        },
        alternateSize: "L",
        notes:
          "Based on your measurements and selected brand, size M should give the best fit.",
      });
    }, 2000);
  };

  /* =========================
     RESET
  ========================= */
  const handleReset = () => {
    setFormData({
      height: "",
      weight: "",
      chest: "",
      waist: "",
      hips: "",
      brand: "",
      category: "",
      fit: "regular",
    });

    setResult(null);
    setLoading(false);
  };

  /* =========================
     UI
  ========================= */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* =========================
          HEADER
      ========================= */}
      <section className="relative overflow-hidden py-8 md:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-1/3 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Ruler className="mr-2 inline h-4 w-4" />
              Size Recommender
            </span>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="text-white">Smart Size </span>
              <span className="gradient-text">Recommender</span>
            </h1>

            <p className="mx-auto max-w-2xl text-gray-400">
              Enter your measurements and let AI find your perfect size across
              different brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          MAIN
      ========================= */}
      <section className="section-container pb-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* =========================
              FORM
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="mb-6 flex items-center text-xl font-semibold text-white">
                <User className="mr-2 h-5 w-5 text-purple-400" />
                Your Measurements
              </h2>

              {/* BASIC */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="input-label">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="170"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="input-label">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="70"
                    required
                    className="input-field"
                  />
                </div>
              </div>

              {/* BODY */}
              <div className="mb-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="input-label">Chest (cm)</label>
                  <input
                    type="number"
                    name="chest"
                    value={formData.chest}
                    onChange={handleChange}
                    placeholder="96"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="input-label">Waist (cm)</label>
                  <input
                    type="number"
                    name="waist"
                    value={formData.waist}
                    onChange={handleChange}
                    placeholder="80"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="input-label">Hips (cm)</label>
                  <input
                    type="number"
                    name="hips"
                    value={formData.hips}
                    onChange={handleChange}
                    placeholder="98"
                    required
                    className="input-field"
                  />
                </div>
              </div>

              {/* BRAND CATEGORY */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                {/* BRAND */}
                <div>
                  <label className="input-label">Brand</label>
                  <div className="relative">
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      required
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select brand</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="input-label">Category</label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* FIT */}
              <div className="mb-6">
                <label className="input-label">Fit Preference</label>

                <div className="flex space-x-3">
                  {[
                    { value: "slim", label: "Slim Fit" },
                    { value: "regular", label: "Regular Fit" },
                    { value: "relaxed", label: "Relaxed Fit" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          fit: option.value,
                        }))
                      }
                      className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        formData.fit === option.value
                          ? "bg-purple-500 text-white"
                          : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex w-full items-center justify-center space-x-2 py-4 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="h-5 w-5" />
                    <span>Get Size Recommendation</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* =========================
              RESULT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card sticky top-24 rounded-2xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center text-xl font-semibold text-white">
                  <BarChart3 className="mr-2 h-5 w-5 text-purple-400" />
                  Result
                </h2>

                {result && (
                  <button
                    onClick={handleReset}
                    className="flex items-center text-sm text-gray-400 hover:text-white"
                  >
                    <RefreshCcw className="mr-1 h-4 w-4" />
                    Reset
                  </button>
                )}
              </div>

              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  {/* MAIN RESULT */}
                  <div className="rounded-xl border border-purple-500/30 bg-linear-to-br from-purple-500/20 to-blue-500/20 p-6 text-center">
                    <p className="mb-2 text-sm text-gray-400">
                      Recommended Size
                    </p>

                    <div className="gradient-text mb-2 text-6xl font-bold">
                      {result.recommendedSize}
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles className="h-5 w-5 text-yellow-400" />
                      <span className="text-lg font-medium text-white">
                        {result.confidence}% Confidence
                      </span>
                    </div>
                  </div>

                  {/* SIZE RANGE */}
                  <div>
                    <p className="mb-3 text-sm text-gray-400">
                      Size Range
                    </p>

                    <div className="flex space-x-2">
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className={`flex-1 rounded-lg py-2 text-center text-sm font-medium ${
                            size === result.recommendedSize
                              ? "bg-purple-500 text-white"
                              : size === result.alternateSize
                              ? "bg-purple-500/30 text-purple-300"
                              : "bg-white/5 text-gray-500"
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FIT */}
                  <div>
                    <p className="mb-3 text-sm text-gray-400">
                      Fit Analysis
                    </p>

                    <div className="space-y-3">
                      {Object.entries(result.fitAnalysis).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between rounded-lg bg-white/5 p-3"
                          >
                            <span className="capitalize text-gray-300">
                              {key}
                            </span>

                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-green-400">
                                {value.fit.replace("_", " ")}
                              </span>

                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* NOTES */}
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                    <p className="text-sm text-blue-300">
                      <Info className="mr-2 inline h-4 w-4" />
                      {result.notes}
                    </p>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    Alternative: Size{" "}
                    <span className="font-medium text-white">
                      {result.alternateSize}
                    </span>{" "}
                    for a looser fit
                  </p>
                </motion.div>
              ) : (
                <div className="py-12 text-center">
                  <Ruler className="mx-auto mb-4 h-16 w-16 text-gray-600" />

                  <p className="text-gray-400">
                    Enter your measurements and select
                    <br />a brand to get recommendations
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default SizeRecommender;
