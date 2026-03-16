import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse pointer-events-none" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40 glow-primary"
        >
          <img src={avatarImg} alt="Instructional Designer Avatar" className="w-full h-full object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
        >
          Instructional Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="gradient-text">Crafting Learning</span>
          <br />
          <span className="text-foreground">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-xl mx-auto text-muted-foreground text-lg mb-10"
        >
          I design engaging, evidence-based digital learning experiences that transform how people grow and develop.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all duration-300 glow-primary"
        >
          View My Work
          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
