/**
 * Dashboard.jsx - User Dashboard Page
 *
 * FIXES:
 * ✅ Logged-in user ka real name show hoga
 * ✅ localStorage safe parsing
 * ✅ Avatar initials auto-generate
 * ✅ Guest fallback
 * ✅ user.avatar bug fixed
 * ✅ Unused imports removed
 */

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Ruler,
  Heart,
  History,
  Settings,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Clock,
  LogOut,
} from "lucide-react";

// Quick stats data
const stats = [
  {
    label: "Try-Ons",
    value: "12",
    icon: Camera,
    change: "+3 this week",
    trend: "up",
  },
  {
    label: "Saved Items",
    value: "24",
    icon: Heart,
    change: "+5 this week",
    trend: "up",
  },
  {
    label: "Size Profile",
    value: "M",
    icon: Ruler,
    change: "Updated",
    trend: "neutral",
  },
  {
    label: "Accuracy",
    value: "98%",
    icon: TrendingUp,
    change: "Excellent",
    trend: "up",
  },
];

// Quick actions
const quickActions = [
  {
    title: "Virtual Try-On",
    description: "Try on clothes virtually",
    icon: Camera,
    link: "/try-on",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Size Recommender",
    description: "Find your perfect size",
    icon: Ruler,
    link: "/size-recommender",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Saved Items",
    description: "View your wishlist",
    icon: Heart,
    link: "#",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "History",
    description: "Past try-on sessions",
    icon: History,
    link: "#",
    gradient: "from-green-500 to-emerald-500",
  },
];

// Recent activity
const recentActivity = [
  {
    id: 1,
    type: "try-on",
    item: "Blue Denim Jacket",
    brand: "Levi's",
    time: "2 hours ago",
    size: "M",
  },
  {
    id: 2,
    type: "size-check",
    item: "Slim Fit Shirt",
    brand: "H&M",
    time: "5 hours ago",
    size: "L",
  },
  {
    id: 3,
    type: "try-on",
    item: "Summer Dress",
    brand: "Zara",
    time: "1 day ago",
    size: "S",
  },
  {
    id: 4,
    type: "saved",
    item: "Casual Sneakers",
    brand: "Nike",
    time: "2 days ago",
    size: "42",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  // Get logged-in user
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const user = storedUser || {
    name: "Guest",
    email: "",
  };

  // Redirect if no user
  useEffect(() => {
    if (!storedUser) {
      navigate("/login");
    }
  }, [storedUser, navigate]);

  // Avatar initials
  const avatar = user.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "G";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Welcome */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {avatar}
                </div>

                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Welcome back, {user.name}! 👋
                  </h1>
                  <p className="text-gray-400">
                    Ready to discover your perfect fit?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/try-on"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Camera className="w-5 h-5" />
                <span>New Try-On</span>
              </Link>

              <button
                onClick={handleLogout}
                className="btn-ghost inline-flex items-center space-x-2 border border-white/10 px-4"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>

              <Link
                to="#"
                className="btn-ghost inline-flex items-center space-x-2 border border-white/10"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>

                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>

                <p className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={action.link}
                  className="glass-card p-5 rounded-2xl block group hover:border-white/20 transition-all duration-300 h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-semibold text-white mb-1">
                    {action.title}
                  </h3>

                  <p className="text-sm text-gray-400">{action.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>

          <Link
            to="#"
            className="text-sm text-primary-400 hover:text-primary-300"
          >
            View all
          </Link>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="divide-y divide-white/5">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{activity.item}</p>
                    <p className="text-sm text-gray-400">{activity.brand}</p>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-lg">
                      Size {activity.size}
                    </span>

                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-end">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div className="glass-card p-6 md:p-8 rounded-2xl bg-linear-to-r from-primary-500/10 to-secondary-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Complete Your Profile
                </h3>
                <p className="text-sm text-gray-400">
                  Add measurements for more accurate recommendations
                </p>
              </div>
            </div>

            <Link
              to="/size-recommender"
              className="btn-primary inline-flex items-center space-x-2 whitespace-nowrap"
            >
              <span>Update Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Dashboard;
