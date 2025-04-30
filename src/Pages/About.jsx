import { motion } from "framer-motion";
import photographer from "../assets/portfolio/photographer.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto bg-black text-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 tracking-wide text-white">About Me</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Hello! I'm Emmanuel Akpan, a passionate photographer who captures the essence of moments, big and small.
          I specialize in portrait and event photography, with a deep appreciation for light, emotion, and storytelling.
        </p>
      </div>

      {/* Image and Description */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          src={photographer}
          alt="Photographer at work"
          className="w-full rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 max-w-[90%] md:max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white">Behind the Lens</h3>
          <p className="text-gray-300 leading-relaxed">
            With over a decade of experience behind the camera, I've had the privilege of capturing everything from intimate
            portraits to lively events. My work blends technical skill with a deep love for the stories that photographs tell.
            Whether it's a quiet moment or a grand celebration, I aim to create lasting memories through every shot I take.
          </p>

          {/* Career Highlights Section */}
          <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-medium text-black mb-2">Career Highlights</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strong Passion For Photography</li>
              <li>Developing Both Artistic And Technical Skills</li>
              <li>Showcasing A Diverse Range Of Photography Styles</li>
            </ul>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg font-medium"
            >
              Let’s Work Together
            </Link>
          </div>
        </div>
      </div>

      {/* Personal Quote / Bio Section */}
      <div className="mt-16 text-center">
        <p className="text-xl font-medium text-gray-400">
          "Photography is not just about taking pictures; it's about telling a story, capturing moments that last a lifetime."
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-16 text-center space-y-4">
        <p className="text-gray-400 text-lg">Follow my journey:</p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="mailto:Akpanemmanuel299@gmail.com" aria-label="Email" className="hover:text-pink-400 transition">
            📧
          </a>
          <a href="tel:+2349054916608" aria-label="Phone" className="hover:text-pink-400 transition">
            📞
          </a>
          <a
            href="https://www.instagram.com/emmyblack47/profilecard/?igsh=MXdxeTI4bmtqZ3pvMw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            📷
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
