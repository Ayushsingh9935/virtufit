import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { Upload, Sparkles, Ruler, X, RefreshCw } from "lucide-react";

export default function TryOn() {
  const [userImage, setUserImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [measurements, setMeasurements] = useState({
    height: "",
    weight: "",
    chest: "",
    waist: "",
  });

  const [recommendedSize, setRecommendedSize] = useState("");

  const fileRef = useRef();

  // Upload User Image
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
      setResultImage(null);
    }
  };

  // Fake AI Try-On Demo
  const handleGenerate = () => {
    if (!userImage) return;

    setLoading(true);

    setTimeout(() => {
      setResultImage(userImage); // Demo preview same image
      setLoading(false);
    }, 2000);
  };

  // Smart Size Recommender
  const handleRecommend = () => {
    const chest = Number(measurements.chest);
    const waist = Number(measurements.waist);

    if (chest < 36) {
      setRecommendedSize("S");
    } else if (chest < 40) {
      setRecommendedSize("M");
    } else if (chest < 44) {
      setRecommendedSize("L");
    } else {
      setRecommendedSize("XL");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* LEFT - Upload */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Upload Your Photo</h2>

          {!userImage ? (
            <div className="text-center">
              <Upload size={50} className="mx-auto mb-4 text-gray-500" />

              <button
                onClick={() => fileRef.current.click()}
                className="bg-purple-600 px-6 py-3 rounded-lg"
              >
                Upload Image
              </button>

              <input
                type="file"
                ref={fileRef}
                className="hidden"
                accept="image/*"
                onChange={handleUpload}
              />
            </div>
          ) : (
            <div className="relative">
              <img
                src={userImage}
                alt="Uploaded"
                className="rounded-lg w-full"
              />

              <button
                onClick={() => setUserImage(null)}
                className="absolute top-2 right-2 bg-red-600 p-2 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        {/* CENTER - AI Result */}
        <div className="bg-zinc-900 p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">AI Virtual Try-On</h2>

          {!resultImage ? (
            <>
              <Sparkles size={50} className="mx-auto mb-4 text-purple-500" />

              <button
                onClick={handleGenerate}
                disabled={!userImage}
                className="bg-purple-600 px-6 py-3 rounded-lg disabled:opacity-50"
              >
                Generate Try-On
              </button>
            </>
          ) : loading ? (
            <p className="text-purple-400 animate-pulse">
              Generating AI Preview...
            </p>
          ) : (
            <div>
              <img
                src={resultImage}
                alt="Result"
                className="rounded-lg w-full"
              />

              <button
                onClick={() => setResultImage(null)}
                className="mt-4 bg-gray-700 px-4 py-2 rounded-lg"
              >
                <RefreshCw className="inline mr-2" size={16} />
                Reset
              </button>
            </div>
          )}
        </div>

        {/* RIGHT - Size Recommendation */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Ruler />
            Size Recommender
          </h2>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Height (cm)"
              className="w-full p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  height: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Weight (kg)"
              className="w-full p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  weight: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Chest (inch)"
              className="w-full p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  chest: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Waist (inch)"
              className="w-full p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setMeasurements({
                  ...measurements,
                  waist: e.target.value,
                })
              }
            />

            <button
              onClick={handleRecommend}
              className="w-full bg-white text-black py-3 rounded-lg font-bold"
            >
              Recommend Size
            </button>

            {recommendedSize && (
              <div className="text-center mt-6 border border-purple-500 p-4 rounded-lg">
                <p className="text-gray-400">Recommended Size</p>
                <h3 className="text-5xl font-bold text-purple-400">
                  {recommendedSize}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
