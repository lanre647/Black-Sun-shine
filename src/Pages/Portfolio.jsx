import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';

const images = [
  { src: '/src/assets/portfolio/product1.jpg', title: 'Elegant Watch', category: 'Product Shot' },
  { src: '/src/assets/portfolio/corporate1.jpg', title: 'Executive Portrait', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/beauty1.jpg', title: 'Birthday Celebration', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/creative1.jpg', title: 'Abstract Vibes', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/event1.jpg', title: 'Live Event Energy', category: 'Event' },
  { src: '/src/assets/portfolio/product2.jpg', title: 'Stylish Footwear', category: 'Product Shot' },
  { src: '/src/assets/portfolio/corporate2.jpg', title: 'Office Ambiance', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/beauty2.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/creative2.jpg', title: 'Urban Creativity', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/event2.jpg', title: 'Concert Lights', category: 'Event' },
  { src: '/src/assets/portfolio/product3.jpg', title: 'Stylish Footwear', category: 'Product Shot' },
  { src: '/src/assets/portfolio/corporate3.jpg', title: 'Office Ambiance', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/beauty3.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/creative3.jpg', title: 'Urban Creativity', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/event3.jpg', title: 'Concert Lights', category: 'Event' },
  { src: '/src/assets/portfolio/event4.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative4.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/beauty4.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/corporate4.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/product4.jpg', title: 'Concert Lights', category: 'Product Shot' },
  { src: '/src/assets/portfolio/event5.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative5.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/beauty5.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/corporate5.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/product5.jpg', title: 'Concert Lights', category: 'product Shot' },
  { src: '/src/assets/portfolio/event6.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative6.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/beauty6.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/corporate6.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/product6.jpg', title: 'Concert Lights', category: 'product Shot' },
  { src: '/src/assets/portfolio/event7.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative7.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/beauty7.webp', title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: '/src/assets/portfolio/corporate7.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/event8.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative8.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/corporate8.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/event9.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative9.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/corporate9.jpg', title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: '/src/assets/portfolio/event10.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/creative10.jpg', title: 'Office Ambiance', category: 'Creative Shot' },
  { src: '/src/assets/portfolio/event11.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event12.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event13.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event15.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event16.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event17.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event18.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event19.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event20.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event21.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event22.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event23.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event24.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event25.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event26.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event27.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event28.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event29.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event30.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event31.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event32.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event33.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event34.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event35.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event36.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event37.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event38.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event39.jpg', title: 'Stylish Footwear', category: 'Event' },
  { src: '/src/assets/portfolio/event40.jpg', title: 'Stylish Footwear', category: 'Event' },
];

const categories = [
  'All',
  'Product Shot',
  'Corporate Portrait',
  'Beauty Shot',
  'Creative Shot',
  'Event',
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const gridRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((img) => img.category === selectedCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    if (gridRef.current) {
      const gridTop = gridRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: gridTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative px-6 py-20 max-w-7xl mx-auto bg-black text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio
        </motion.h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A curated gallery of my work — crafted with passion, precision, and storytelling spirit.
        </p>
      </div>

      {/* Sticky Category Filters with Fade and Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-16 z-30 backdrop-blur-md bg-white/80 py-3"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full border transition text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <div ref={gridRef} className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-8">
        {filteredImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => setLightbox(idx)}
            className="break-inside-avoid overflow-hidden rounded-3xl shadow-md cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300"
            />
            <div className="bg-black bg-opacity-70 p-4 rounded-b-xl">
              <h4 className="font-semibold text-white text-base">{img.title}</h4>
              <p className="text-sm text-gray-300">{img.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="relative">
            <img
              src={filteredImages[lightbox].src}
              alt="lightbox preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-xl"
            />
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-6 right-6 bg-white text-black rounded-full p-2.5 shadow-lg hover:bg-gray-200 transition"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      {/* Scroll Control Buttons (Minimalist) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition text-sm"
          title="Scroll to Top"
        >
          ↑
        </button>
        <button
          onClick={scrollToNextSection}
          className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition text-sm"
          title="Scroll to Grid"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
