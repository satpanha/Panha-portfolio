import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Sat Panha is a very talented developer. He is a great team player and always delivers high-quality work.",
    name: "John Doe",
    title: "CEO, Example Inc."
  },
  {
    quote: "I was very impressed with Sat Panha's work. He is a very skilled developer and I would highly recommend him.",
    name: "Jane Doe",
    title: "CTO, Example Inc."
  },
  {
    quote: "Sat Panha is a pleasure to work with. He is a very hard worker and always goes the extra mile.",
    name: "Peter Jones",
    title: "Lead Developer, Example Inc."
  },
];

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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">Testimonials</h2>
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="rounded-xl border border-primary bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <p className="text-text-dark flex-1">"{t.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-text-dark">{t.name}</p>
                <p className="text-text-dark">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
