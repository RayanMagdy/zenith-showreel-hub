import { motion } from "framer-motion";

const skills = [
  { name: "Articulate Storyline / Rise", level: 95 },
  { name: "Instructional Design (ADDIE / SAM)", level: 90 },
  { name: "Learning Experience Design", level: 88 },
  { name: "xAPI / SCORM", level: 85 },
  { name: "Video Production & Editing", level: 80 },
  { name: "React / Web Development", level: 75 },
  { name: "AI in Learning", level: 78 },
  { name: "Accessibility (WCAG)", level: 82 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Core competencies spanning instructional design methodologies, authoring tools, and modern technology.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.07 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
