import { motion } from 'framer-motion';

const experiences = [
  { role: 'Head of Project & Event Department – CADT Student Association', time: 'May, 2025 – Present' },
  { role: 'Team Lead of Booth Management – TVET 2025', time: 'May – July, 2025' },
  { role: 'Logistics Coordinator – Cambodia Blockchain First Submit 2024', time: 'Feb – March, 2025' },
  { role: 'Flash Mob Coordinator – Celebrating Cambodia 2024', time: 'Nov, 2024 – Jan, 2025' },
  { role: 'Facilitator Speaker – Cambodia ICT Camp 2024', time: 'Dec, 2024' },
  { role: 'Register & Flow Volunteer – CAMEX24', time :'Sep – Oct, 2024'},
  { role: 'Digital Marketing Volunteer – Code C Conference 2024', time: 'June – July, 2024' },
  { role: 'Crowd Team of Product Verify – Digital Government Forum 2024', time: 'March, 2024' },
];

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

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">Experience</h2>
        <div className="mt-8">
          <motion.div
            className="relative border-l border-primary"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((exp, idx) => (
              <motion.div key={idx} className="relative pl-6 pb-8" variants={itemVariants}>
                <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-secondary" />
                <p className="font-medium text-text-dark">{exp.role}</p>
                <p className="text-sm text-text-dark">{exp.time}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
