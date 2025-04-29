import { motion } from 'framer-motion';

function About() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">About Me</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Hello! I'm Emmanuel Akpan, a passionate photographer who captures the essence of moments, big and small.
          I specialize in portrait and event photography, with a deep appreciation for light, emotion, and storytelling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="../src/assets/portfolio/photographer.jpg"
          alt="Photographer at work"
          className="w-full rounded-3xl shadow-xl"
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

          <div className="bg-white text-black rounded-2xl p-6">
            <h4 className="text-xl font-medium text-black mb-2">Highlights</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Published in PhotoLife Magazine</li>
              <li>Featured in Urban Gallery 2023</li>
              <li>Top 10 Finalist – StreetPhoto Awards</li>
            </ul>
          </div>

          <div>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg font-medium"
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
