import { motion } from 'framer-motion';
import { projectsContent } from '../../lib/data';

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

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 py-16 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-serif">{projectsContent.heading}</h2>
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsContent.projects.map((p) => (
            <motion.div
              key={p.id}
              className="rounded-xl border border-primary bg-white p-6 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-text-dark flex-1">{p.description}</p>
              <div className="mt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-3">
                {p.liveLink && <a href={p.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white font-medium hover:bg-primary transition-colors text-center">View Demo</a>}
                {p.githubLink && <a href={p.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-primary font-medium hover:bg-secondary transition-colors text-center">GitHub Repo</a>}
              </div>
            </motion.div>
            
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}