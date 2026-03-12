import { motion } from 'framer-motion';
import { experienceContent, projectsContent } from '../../lib/data';

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

// Reuse project images already in public/ — matched by project id
const projectImageMap = {
  1: projectsContent.projects.find((p) => p.id === 1)?.image, // MOEYS → sport-management-system.png
  2: projectsContent.projects.find((p) => p.id === 2)?.image, // Domrov LMS
  3: projectsContent.projects.find((p) => p.id === 3)?.image, // CPF / Bookstore
  4: projectsContent.projects.find((p) => p.id === 4)?.image, // Vireak Buntham
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
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center font-serif">
          {experienceContent.heading}
        </h2>

        <div className="mt-8">
          <motion.div
            className="relative border-l border-primary"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experienceContent.jobs.map((job) => {
              const image = projectImageMap[job.id];
              return (
                <motion.div
                  key={job.id}
                  className="relative pl-6 pb-8"
                  variants={itemVariants}
                >
                  <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-secondary" />
                  <p className="font-medium text-text-dark">{job.title}</p>
                  <p className="text-sm text-text-dark">{job.company}</p>
                  <p className="text-sm text-text-dark">{job.years}</p>
                  <p className="mt-1 text-sm text-text-dark opacity-80">{job.description}</p>

                  {image && (
                    <motion.div
                      className="mt-3 overflow-hidden rounded-md border border-primary/20 w-full aspect-video"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <img
                        src={image}
                        alt={job.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}