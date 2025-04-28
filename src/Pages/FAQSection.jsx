import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQSection() {
  const faqs = [
    {
      question: 'How long until I receive my photos?',
      answer: 'Typically within 7-10 days. For events or large shoots, up to 2 weeks.',
    },
    {
      question: 'Do you travel for shoots?',
      answer: 'Absolutely! Travel within 50 miles is included. Further distances may incur a fee.',
    },
    {
      question: 'Can I choose which photos get edited?',
      answer: 'Yes! You’ll get a preview gallery to pick your favorites for final editing.',
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'Cancellations up to 48 hours in advance are refundable. Rescheduling is always free.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 px-6 py-14 rounded-3xl shadow-inner">
      <h3 className="text-4xl font-bold text-center mb-10 text-white">Frequently Asked Questions</h3>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-white">{faq.question}</h4>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-gray-400"
              >
                {openIndex === index ? '-' : '+'}
              </motion.span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
