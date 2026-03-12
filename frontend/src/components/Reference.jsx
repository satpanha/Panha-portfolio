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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.15 },
  }),
};

export default function Reference() {
  // Support both legacy single object and new array format
  const references = Array.isArray(referenceContent)
    ? referenceContent
    : [referenceContent];

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
        <h2 className="text-2xl sm:text-3xl font-bold text-primary font-serif">Reference</h2>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-stretch">
          {references.map((ref, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/60 rounded-xl p-6 shadow-sm flex flex-col items-center flex-1 max-w-xs mx-auto sm:mx-0"
            >
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mb-4 flex-shrink-0 bg-gray-100">
                {ref.photo ? (
                  <img
                    src={ref.photo}
                    alt={ref.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Fallback initials avatar
                  <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xl font-bold">
                    {ref.name
                      .split(' ')
                      .filter((_, idx, arr) => idx === 0 || idx === arr.length - 1)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-primary">{ref.name}</h3>
              <p className="text-text-dark mt-1 text-sm">{ref.position}</p>
              <p className="text-text-dark mt-1 text-sm">
                <a
                  href={`mailto:${ref.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {ref.email}
                </a>
              </p>
              <p className="text-text-dark mt-1 text-sm">Telegram: {ref.telegram}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}