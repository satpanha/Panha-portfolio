import { motion } from 'framer-motion';
import { educationContent } from '../../lib/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">{educationContent.heading}</h2>
        <div className="mt-8 space-y-6">
          {educationContent.schools.map((school) => (
            <motion.div
              key={school.id}
              className="bg-white/60 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary">{school.degree}</h3>
              <p className="text-text-dark mt-1">{school.specialization}</p>
              <p className="text-text-dark">{school.institution}</p>
              <p className="text-sm text-text-dark mt-1">{school.years}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
