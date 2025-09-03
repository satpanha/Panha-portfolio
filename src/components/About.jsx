import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    <motion.section
      id="about-me"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary font-serif">About Me</h2>
        <p className="mt-4 text-text-dark font-sans">
          Hello! I'm Sat Panha, a passionate software engineering student with a knack for building engaging web experiences. My journey into development started with a curiosity for how things work, which quickly evolved into a love for crafting elegant solutions through code.
        </p>
        <p className="mt-4 text-text-dark font-sans">
          I specialize in full-stack web development, with a strong focus on React for dynamic front-ends and robust back-ends using Node.js and various databases. I thrive on challenges and constantly seek to learn new technologies to expand my skill set.
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-primary font-serif mt-8">Beyond the Code</h3>
        <p className="mt-4 text-text-dark font-sans">
          When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or diving into a good book. I believe that a balanced life fuels creativity and problem-solving, both in and out of development.
        </p>
      </div>
    </motion.section>
  );
}