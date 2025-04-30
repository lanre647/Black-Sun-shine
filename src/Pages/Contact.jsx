import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "04854548-ce99-467b-8e1f-a3e1a2e656e6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitMessage("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "", service: "" });
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Network error! Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 md:px-12 py-20 max-w-5xl mx-auto relative overflow-hidden bg-black text-white">
      {/* Title Section */}
      <div className="text-center mb-20">
        <span className="block text-sm uppercase tracking-widest text-pink-400 mb-4">
          Let’s Connect
        </span>
        <h2 className="text-5xl font-extrabold mb-6">Contact</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Got a project in mind or just want to say hello? Drop a message below or connect via socials.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="bg-gray-800/90 p-10 md:p-16 rounded-3xl shadow-2xl backdrop-blur-lg space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            aria-label="Name"
            className="w-full p-5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            aria-label="Email"
            className="w-full p-5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
          />
        </div>

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          aria-label="Select Service"
          className="w-full p-5 rounded-xl border border-gray-700 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900"
        >
          <option value="">Select Service Type</option>
          <option value="Portrait">Portrait</option>
          <option value="Wedding">Wedding</option>
          <option value="Commercial">Commercial</option>
          <option value="Event">Event</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          aria-label="Message"
          className="w-full p-5 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black font-bold px-10 py-4 rounded-xl text-lg transition hover:shadow-lg"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>

      {/* Form Submission Message */}
      {submitMessage && (
        <div className="mt-6 text-center text-lg font-medium text-gray-400">{submitMessage}</div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-700 mt-20 mb-10"></div>

      {/* Social Media Links */}
      <div className="text-center space-y-6">
        <p className="text-gray-400 text-lg">Or reach me directly:</p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="mailto:Akpanemmanuel299@gmail.com" aria-label="Email" className="hover:text-pink-400 transition">
            <FaEnvelope />
          </a>
          <a href="tel:+2349054916608" aria-label="Phone" className="hover:text-pink-400 transition">
            <FaPhone />
          </a>
          <a
            href="https://www.instagram.com/emmyblack47/profilecard/?igsh=MXdxeTI4bmtqZ3pvMw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
