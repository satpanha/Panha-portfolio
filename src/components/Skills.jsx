import { getSkillLogo } from "./SkillLogos";

const categories = [
  { title: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript'] },
  { title: 'Frameworks', items: ['React.js', 'Express.js', 'Sequelize'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { title: 'Tools', items: ['GitHub', 'Figma'] },
  { title: 'Soft Skills', items: ['Problem-Solving', 'Teamwork', 'Communication'] },
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

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">Skills</h2>
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="rounded-xl border border-primary bg-white p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-primary">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-3 py-1 text-sm font-medium">
                    {getSkillLogo(item) || <span className="text-accent">•</span>}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
