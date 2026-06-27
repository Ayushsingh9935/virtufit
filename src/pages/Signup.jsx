/**
 * Signup.jsx - Signup Page (FIXED)
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  UserPlus,
  Sparkles,
  Globe,
  CheckCircle2,
} from "lucide-react";

const passwordRequirements = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  { label: "Contains uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "Contains lowercase letter", test: (pw) => /[a-z]/.test(pw) },
  { label: "Contains number", test: (pw) => /[0-9]/.test(pw) },
];

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getPasswordStrength = () => {
    const passed = passwordRequirements.filter((r) =>
      r.test(formData.password)
    ).length;

    if (passed === 0) return { level: 0, label: "", color: "" };
    if (passed === 1) return { level: 1, label: "Weak", color: "bg-red-500" };
    if (passed === 2)
      return { level: 2, label: "Fair", color: "bg-yellow-500" };
    if (passed === 3)
      return { level: 3, label: "Good", color: "bg-blue-500" };
    return { level: 4, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength();

  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept Terms & Privacy Policy");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // ✅ SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      );

      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">VirtuFit</span>
          </Link>
        </div>

        {/* Card */}
        <div className="glass-card-strong p-8 rounded-3xl">

          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Create Account
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Join VirtuFit
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10"
                  placeholder="Password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                required
              />
              {!passwordsMatch && formData.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-center space-x-2 text-sm text-gray-400">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <span>I agree to Terms</span>
            </label>

            {/* Submit */}
            <button
              disabled={loading}
              className="w-full btn-primary py-3"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Login link */}
          <p className="text-center text-gray-400 mt-5">
            Already have account?{" "}
            <Link to="/login" className="text-purple-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;