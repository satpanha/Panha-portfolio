import { motion } from 'framer-motion';
import { volunteerContent } from '../../lib/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Volunteer() {
  return (
    <motion.section
      id="volunteer"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-serif">{volunteerContent.heading}</h2>
        <div className="mt-8">
          <motion.div
            className="relative border-l border-primary"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {volunteerContent.roles.map((role) => (
              <motion.div key={role.id} className="relative pl-6 pb-8" variants={itemVariants}>
                <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-secondary" />
                <p className="font-medium text-text-dark">{role.title}</p>
                <p className="text-sm text-text-dark">{role.organization}</p>
                <p className="text-sm text-text-dark">{role.years}</p>
                <p className="mt-1 text-sm text-text-dark opacity-80">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
