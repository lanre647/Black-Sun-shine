import { FaCameraRetro, FaUsers, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQSection from './FAQSection'; // Assuming you have a separate FAQSection component

function Services() {
  const services = [
    {
      icon: <FaCameraRetro size={30} />,
      title: 'Portrait Sessions',
      description: '1-hour shoot, 15 retouched images, multiple outfit changes.',
      price: '$200',
    },
    {
      icon: <FaUsers size={30} />,
      title: 'Event Coverage',
      description: 'Weddings, parties, corporate events. Full gallery delivery.',
      price: 'Starting at $600',
    },
    {
      icon: <FaBriefcase size={30} />,
      title: 'Commercial Shoots',
      description: 'Product photography, branding, lifestyle. Tailored to your needs.',
      price: 'Custom pricing',
    },
  ];

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">Services</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need a personal portrait, full event coverage, or commercial visuals, here’s what I offer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }} // Hover scale effect
            className="bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition space-y-4 text-center"
          >
            <div className="text-white mb-2 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-300 leading-relaxed">{service.description}</p>
            <p className="text-white font-semibold text-lg">{service.price}</p>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <FAQSection />
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg font-medium"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
}

export default Services;
