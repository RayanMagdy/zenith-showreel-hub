import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A comprehensive LMS with course modules, progress tracking, and learner analytics for corporate training.",
    image: project1,
    tags: ["Articulate 360", "React", "AI"],
    demo: "#",
    source: "#",
  },
  {
    title: "Gamified Training Sim",
    description: "Interactive training simulation with badges, achievements, and scenario-based learning paths.",
    image: project2,
    tags: ["xAPI", "Storyline", "Gamification"],
    demo: "#",
    source: "#",
  },
  {
    title: "Learning Analytics Dashboard",
    description: "AI-powered dashboard providing actionable insights on learner engagement and knowledge retention.",
    image: project3,
    tags: ["React", "Tailwind", "AI"],
    demo: "#",
    source: "#",
  },
  {
    title: "Mobile Microlearning App",
    description: "Bite-sized learning modules optimized for mobile consumption with video and interactive assessments.",
    image: project4,
    tags: ["React Native", "xAPI", "UX"],
    demo: "#",
    source: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of instructional design projects showcasing my approach to creating impactful learning experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> View Demo
                  </a>
                  <a
                    href={project.source}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
