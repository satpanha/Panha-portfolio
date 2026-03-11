import { motion } from 'framer-motion';
import { referenceContent } from '../../lib/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Reference() {
  return (
    <motion.section
      id="reference"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">Reference</h2>
        <div className="mt-8 bg-white/60 rounded-xl p-6 shadow-sm inline-block">
          <h3 className="text-xl font-semibold text-primary">{referenceContent.name}</h3>
          <p className="text-text-dark mt-1">{referenceContent.position}</p>
          <p className="text-text-dark mt-1">
            <a href={`mailto:${referenceContent.email}`} className="hover:text-primary transition-colors">
              {referenceContent.email}
            </a>
          </p>
          <p className="text-text-dark mt-1">Telegram: {referenceContent.telegram}</p>
        </div>
      </div>
    </motion.section>
  );
}
