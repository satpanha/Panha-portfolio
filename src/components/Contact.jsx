import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram_username: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please correct the errors in the form.');
      return;
    }

    setIsSending(true);

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await resp.json().catch(() => ({}));
      if (!resp.ok || json.ok !== true) {
        throw new Error(json.error || 'Failed to send message');
      }

      toast.success(`Thank you for your message, ${formData.name}! I will get back to you soon.`);
      setFormData({
        name: '',
        email: '',
        telegram_username: '',
        message: '',
      }); // Reset form data
    } catch (err) {
      console.error('Contact submit error:', err);
      toast.error('Sorry, there was a problem sending your message. Please try again later or contact me directly at satpanha618@gmail.com');
    } finally {
      setIsSending(false);
    }
  };

  return (


    <motion.section
      id="contact"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-serif">Contact</h2>
        <p className="mt-4 text-center text-text-dark font-sans">Let’s build something together. Feel free to reach out!</p> 
        <motion.div
          className="mt-8 grid gap-8 sm:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-sm" variants={itemVariantsLeft}>
            <h3 className="text-xl font-semibold text-primary mb-4 font-serif">Contact Information</h3>
            <ul className="space-y-4 text-text-dark font-sans">
              <li className="flex items-center space-x-2">
                <span className="text-xl"><MdEmail /></span>
                <span>Email: <a className="text-primary hover:underline break-all" href="mailto:satpanha618@gmail.com">satpanha618@gmail.com</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-xl"><FaGithub /></span>
                <span>GitHub: <a className="text-primary hover:underline break-all" href="https://github.com/satpanha" target="_blank" rel="noreferrer">github.com/satpanha</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-xl"><FaLinkedin /></span>
                <span>LinkedIn: <a className="text-primary hover:underline break-all" href="https://www.linkedin.com/in/sat-panha/" target="_blank" rel="noreferrer">linkedin.com/in/sat-panha/</a></span>
              </li>
            </ul>
          </motion.div>
          <motion.form onSubmit={handleSubmit} className="space-y-4" variants={itemVariantsRight}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-dark font-sans">Name</label>
              {/* Ensure input has appropriate ARIA attributes for accessibility */}
              <input id="name" name="name" type="text" required className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent ${errors.name ? 'border-red-500' : 'border-primary'}`} value={formData.name} onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark font-sans">Email</label>
              {/* Ensure input has appropriate ARIA attributes for accessibility */}
              <input id="email" name="email" type="email" required className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent ${errors.email ? 'border-red-500' : 'border-primary'}`} value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="telegram_username" className="block text-sm font-medium text-text-dark font-sans">Telegram Username</label>
              {/* Ensure input has appropriate ARIA attributes for accessibility */}
              <input id="telegram_username" name="telegram_username" type="text" className="mt-1 w-full rounded-md border border-primary px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent" value={formData.telegram_username} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-dark font-sans">Message</label>
              {/* Ensure textarea has appropriate ARIA attributes for accessibility */}
              <textarea id="message" name="message" rows="4" required className={`mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent ${errors.message ? 'border-red-500' : 'border-primary'}`} value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-black border font-medium hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
              aria-label={isSending ? 'Sending message' : 'Send message'}
            >
              {isSending ? 'Sending...' : 'Submit'}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
