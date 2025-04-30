import { FaCamera, FaTree, FaUsers, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import FAQSection from "./FAQSection"; 
import { Link } from "react-router-dom";
import banner from "../assets/portfolio/banner.jpg"

function Services() {
  const services = [
    {
      icon: <FaCamera size={30} />,
      title: "Studio Photoshoot",
      description:
        "Creative in-studio sessions. Choose between 1-3 outfits, with up to 10 beautifully edited pictures.",
      price: "From ₦150,000",
    },
    {
      icon: <FaTree size={30} />,
      title: "Outdoor Shoots",
      description:
        "Capture stunning outdoor memories. Includes logistics and multiple outfit options.",
      price: "From ₦200,000",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Event Coverage",
      description:
        "Portrait coverage for weddings, birthdays, and corporate events. Full gallery with logistics handled.",
      price: "From ₦200,000",
    },
    {
      icon: <FaBook size={30} />,
      title: "Photo Book Packages",
      description:
        "High-quality custom photo albums. Options from 5x7 to 18x24 sizes, with luxury covers and designs.",
      price: "From ₦52,500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah A.",
      feedback: "BlackSunshine Studio made my wedding day unforgettable! Gorgeous pictures and great service.",
    },
    {
      name: "Tunde O.",
      feedback: "Professional and creative team. My brand shoot exceeded my expectations!",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${banner})` }}>
        <div className="bg-black mt-6 bg-opacity-60 p-8 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Capture Timeless Moments</h1>
          <p className="text-gray-300 mb-6">Studio | Outdoor | Events | Photo Books</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-[0_0_20px_#8b5cf6] px-6 py-3 text-lg font-semibold rounded-xl transition duration-300"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select the perfect session for you — indoor, outdoor, or bespoke events. Crafted for unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition space-y-4 text-center"
            >
              <div className="text-white mb-2 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <p className="text-white font-semibold text-lg">{service.price}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <FAQSection />
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-700 p-6 rounded-2xl shadow-lg"
              >
                <p className="text-gray-200 mb-4 italic">"{testimonial.feedback}"</p>
                <h4 className="text-white font-semibold">- {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-[0_0_20px_#8b5cf6] px-8 py-4 text-lg font-semibold rounded-full transition duration-300"
          >
            Let's Capture Your Story 📸
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
