import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' });
  const [loading, setLoading] = useState(false); // To track form submission status
  const [submitMessage, setSubmitMessage] = useState(''); // For displaying success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true); // Start loading when form is being submitted
    setSubmitMessage(''); // Reset the submit message before submitting

    const formData = new FormData(event.target);
    formData.append('access_key', '04854548-ce99-467b-8e1f-a3e1a2e656e6');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitMessage('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', message: '', service: '' }); // Reset form fields after success
      } else {
        setSubmitMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error! Please check your connection and try again.');
    } finally {
      setLoading(false); // Stop loading after submission attempt
    }
  };

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">Contact</h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Got a project in mind or just want to say hello? Drop a message below or connect via socials.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 bg-gray-800 p-10 rounded-3xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            aria-label="Name"
            className="w-full p-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            aria-label="Email"
            className="w-full p-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
          />
        </div>

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          aria-label="Select Service"
          className="w-full p-4 rounded-xl border border-gray-700 text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900"
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
          className="w-full p-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-900 text-white"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {submitMessage && (
        <div className="mt-6 text-center text-lg font-medium text-gray-400">{submitMessage}</div>
      )}

      <div className="mt-16 text-center space-y-4">
        <p className="text-gray-400">Or reach me directly:</p>
        <div className="flex justify-center gap-6 text-gray-300 text-2xl">
          <a href="mailto:Akpanemmanuel299@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+09054916608" aria-label="Phone">
            <FaPhone />
          </a>
          <a
            href="https://www.instagram.com/emmyblack47/profilecard/?igsh=MXdxeTI4bmtqZ3pvMw=="
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
