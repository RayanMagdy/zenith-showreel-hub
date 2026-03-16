import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate instructional designer with over 8 years of experience creating impactful learning solutions for Fortune 500 companies, startups, and educational institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines learning science, human-centered design, and modern technology to build experiences that don't just inform—they transform. I specialize in blended learning, e-learning development, and AI-enhanced education.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all duration-300 glow-primary"
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Briefcase, label: "8+ Years", sub: "Experience" },
              { icon: GraduationCap, label: "50+ Courses", sub: "Designed" },
              { icon: Award, label: "12 Awards", sub: "Received" },
              { icon: Download, label: "100K+", sub: "Learners Reached" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <item.icon size={24} className="mx-auto mb-3 text-primary" />
                <p className="font-display text-xl font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
