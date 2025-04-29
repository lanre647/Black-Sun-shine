import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/grain.png')] opacity-5 bg-cover" />

      {/* Hero Section Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-6 z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Capturing Life’s <br className="hidden md:inline-block" /> Most
          Beautiful Moments
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto"
        >
          A timeless portfolio crafted to showcase emotion, story, and artistry
          through every shot.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black font-bold px-6 py-3 rounded-xl text-lg hover:shadow-[0_0_20px_#8b5cf6] transition duration-300"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-white px-6 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Image with animated fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/src/assets/portfolio/bg.jpg')" }}
      />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
        </div>
        <span className="mt-2 text-xs opacity-70">Crafted for the Bold</span>
      </motion.div>
    </div>
  );
}
