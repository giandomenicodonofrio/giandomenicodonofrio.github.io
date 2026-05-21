import { motion } from "framer-motion";
import { EASE_POWER2 } from "../SceneWrapper";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const TransitionScene = () => {
  const { ref, y } = useParallax(0.1);

  return (
    <section ref={ref} className="relative w-full min-h-[50vh] bg-massa-red overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0" style={{ y }} />
      <motion.div className="relative z-10 w-6 h-6 bg-massa-black" initial={{ opacity: 0, scale: 0.8, rotate: 45 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.18 }} />
    </section>
  );
};

export default TransitionScene;
