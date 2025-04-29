import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';
import product1 from "../assets/portfolio/product1.jpg";
import product2 from "../assets/portfolio/product2.jpg";
import product3 from "../assets/portfolio/product3.jpg";
import product4 from "../assets/portfolio/product4.jpg";
import product5 from "../assets/portfolio/product5.jpg";
import product6 from "../assets/portfolio/product6.jpg";
import corporate1 from "../assets/portfolio/corporate1.jpg";
import corporate2 from "../assets/portfolio/corporate2.jpg";
import corporate3 from "../assets/portfolio/corporate3.jpg";
import corporate4 from "../assets/portfolio/corporate4.jpg";
import corporate5 from "../assets/portfolio/corporate5.jpg";
import corporate6 from "../assets/portfolio/corporate6.jpg";
import corporate7 from "../assets/portfolio/corporate7.jpg";
import corporate8 from "../assets/portfolio/corporate8.jpg";
import corporate9 from "../assets/portfolio/corporate9.jpg";
// import beauty1 from "../assets/portfolio/beauty1.webp";
// import beauty2 from "../assets/portfolio/beauty2.webp";
// import beauty3 from "../assets/portfolio/beauty3.webp";
// import beauty4 from "../assets/portfolio/beauty4.webp";
// import beauty5 from "../assets/portfolio/beauty5.webp";
// import beauty6 from "../assets/portfolio/beauty6.webp";
import creative1 from "../assets/portfolio/creative1.jpg";
import creative2 from "../assets/portfolio/creative2.jpg";
import creative3 from "../assets/portfolio/creative3.jpg";
import creative4 from "../assets/portfolio/creative4.jpg";
import creative5 from "../assets/portfolio/creative5.jpg";
import creative6 from "../assets/portfolio/creative6.jpg";
import creative7 from "../assets/portfolio/creative7.jpg";
import creative8 from "../assets/portfolio/creative8.jpg";
import creative9 from "../assets/portfolio/creative9.jpg";
import creative10 from "../assets/portfolio/creative10.jpg";
import event1 from "../assets/portfolio/event1.jpg"
import event2 from "../assets/portfolio/event2.jpg"
import event3 from "../assets/portfolio/event3.jpg"
import event4 from "../assets/portfolio/event4.jpg"
import event5 from "../assets/portfolio/event5.jpg"
import event6 from "../assets/portfolio/event6.jpg"
import event7 from "../assets/portfolio/event7.jpg"
import event8 from "../assets/portfolio/event8.jpg"
import event9 from "../assets/portfolio/event9.jpg"
import event10 from "../assets/portfolio/event10.jpg"
import event11 from "../assets/portfolio/event11.jpg"
import event12 from "../assets/portfolio/event12.jpg"
import event13 from "../assets/portfolio/event13.jpg"
import event14 from "../assets/portfolio/event14.jpg"
import event15 from "../assets/portfolio/event15.jpg"
import event16 from "../assets/portfolio/event16.jpg"
import event17 from "../assets/portfolio/event17.jpg"
import event18 from "../assets/portfolio/event18.jpg"
import event19 from "../assets/portfolio/event19.jpg"
import event20 from "../assets/portfolio/event20.jpg"
import event21 from "../assets/portfolio/event21.jpg"
import event22 from "../assets/portfolio/event22.jpg"
import event23 from "../assets/portfolio/event23.jpg"
import event24 from "../assets/portfolio/event24.jpg"
import event25 from "../assets/portfolio/event25.jpg"
import event26 from "../assets/portfolio/event26.jpg"
import event27 from "../assets/portfolio/event27.jpg"
import event28 from "../assets/portfolio/event28.jpg"
import event29 from "../assets/portfolio/event29.jpg"
import event30 from "../assets/portfolio/event30.jpg"
import event31 from "../assets/portfolio/event31.jpg"
import event32 from "../assets/portfolio/event32.jpg"
import event33 from "../assets/portfolio/event33.jpg"
import event34 from "../assets/portfolio/event34.jpg"
import event35 from "../assets/portfolio/event35.jpg"
import event36 from "../assets/portfolio/event36.jpg"
import event37 from "../assets/portfolio/event37.jpg"
import event38 from "../assets/portfolio/event38.jpg"
import event39 from "../assets/portfolio/event39.jpg"
import event40 from "../assets/portfolio/event40.jpg"

const images = [
  { src: product1, title: 'Elegant Watch', category: 'Product Shot' },
  { src: corporate1, title: 'Executive Portrait', category: 'Corporate Portrait' },
  { src: beauty1, title: 'Birthday Celebration', category: 'Beauty Shot' },
  { src: creative1, title: 'Abstract Vibes', category: 'Creative Shot' },
  { src: event1, title: 'Live Event Energy', category: 'Event' },
  { src: product2, title: 'Stylish Footwear', category: 'Product Shot' },
  { src: corporate2, title: 'Office Ambiance', category: 'Corporate Portrait' },
  { src: beauty2, title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: creative2, title: 'Urban Creativity', category: 'Creative Shot' },
  { src: event2, title: 'Concert Lights', category: 'Event' },
  { src: product3, title: 'Stylish Footwear', category: 'Product Shot' },
  { src: corporate3, title: 'Office Ambiance', category: 'Corporate Portrait' },
  { src: beauty3, title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: creative3, title: 'Urban Creativity', category: 'Creative Shot' },
  { src: event3, title: 'Concert Lights', category: 'Event' },
  { src: event4, title: 'Stylish Footwear', category: 'Event' },
  { src: creative4, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: beauty4, title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: corporate4, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: product4, title: 'Concert Lights', category: 'Product Shot' },
  { src: event5, title: 'Stylish Footwear', category: 'Event' },
  { src: creative5, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: beauty5, title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: corporate5, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: product5, title: 'Concert Lights', category: 'product Shot' },
  { src: event6, title: 'Stylish Footwear', category: 'Event' },
  { src: creative6, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: beauty6, title: 'Smiles All Around', category: 'Beauty Shot' },
  { src: corporate6, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: product6, title: 'Concert Lights', category: 'product Shot' },
  { src: event7, title: 'Stylish Footwear', category: 'Event' },
  { src: creative7, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: corporate7, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: event8, title: 'Stylish Footwear', category: 'Event' },
  { src: creative8, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: corporate8, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: event9, title: 'Stylish Footwear', category: 'Event' },
  { src: creative9, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: corporate9, title: 'Urban Creativity', category: 'Corporate Portrait' },
  { src: event10, title: 'Stylish Footwear', category: 'Event' },
  { src: creative10, title: 'Office Ambiance', category: 'Creative Shot' },
  { src: event11, title: 'Stylish Footwear', category: 'Event' },
  { src: event12, title: 'Stylish Footwear', category: 'Event' },
  { src: event13, title: 'Stylish Footwear', category: 'Event' },
  { src: event15, title: 'Stylish Footwear', category: 'Event' },
  { src: event14, title: 'Stylish Footwear', category: 'Event' },
  { src: event16, title: 'Stylish Footwear', category: 'Event' },
  { src: event17, title: 'Stylish Footwear', category: 'Event' },
  { src: event18, title: 'Stylish Footwear', category: 'Event' },
  { src: event19, title: 'Stylish Footwear', category: 'Event' },
  { src: event20, title: 'Stylish Footwear', category: 'Event' },
  { src: event21, title: 'Stylish Footwear', category: 'Event' },
  { src: event22, title: 'Stylish Footwear', category: 'Event' },
  { src: event23, title: 'Stylish Footwear', category: 'Event' },
  { src: event24, title: 'Stylish Footwear', category: 'Event' },
  { src: event25, title: 'Stylish Footwear', category: 'Event' },
  { src: event26, title: 'Stylish Footwear', category: 'Event' },
  { src: event27, title: 'Stylish Footwear', category: 'Event' },
  { src: event28, title: 'Stylish Footwear', category: 'Event' },
  { src: event29, title: 'Stylish Footwear', category: 'Event' },
  { src: event30, title: 'Stylish Footwear', category: 'Event' },
  { src: event31, title: 'Stylish Footwear', category: 'Event' },
  { src: event32, title: 'Stylish Footwear', category: 'Event' },
  { src: event33, title: 'Stylish Footwear', category: 'Event' },
  { src: event34, title: 'Stylish Footwear', category: 'Event' },
  { src: event35, title: 'Stylish Footwear', category: 'Event' },
  { src: event36, title: 'Stylish Footwear', category: 'Event' },
  { src: event37, title: 'Stylish Footwear', category: 'Event' },
  { src: event38, title: 'Stylish Footwear', category: 'Event' },
  { src: event39, title: 'Stylish Footwear', category: 'Event' },
  { src: event40, title: 'Stylish Footwear', category: 'Event' },
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
