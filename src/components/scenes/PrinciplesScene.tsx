import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const PrinciplesScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.2);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-paper overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 bg-massa-paper" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2 }} />

      <div className="clip-reveal z-10 text-center px-6">
        <motion.h2 className="font-display text-massa-black text-[10vw] md:text-[7vw] leading-[0.85] uppercase" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={vp} transition={{ duration: 0.65, ease: EASE_POWER3, delay: 0.16 }}>
          {t("scene11.title1")}
        </motion.h2>
        <motion.h2 className="font-display text-massa-black text-[10vw] md:text-[7vw] leading-[0.85] uppercase" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={vp} transition={{ duration: 0.65, ease: EASE_POWER3, delay: 0.28 }}>
          {t("scene11.title2")}
        </motion.h2>
        <motion.p className="font-mono text-massa-black text-base md:text-lg mt-8 max-w-xl mx-auto leading-relaxed opacity-80" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 0.7, y: 0 }} viewport={vp} transition={{ duration: 0.5, ease: EASE_POWER2, delay: 0.45 }}>
          {t("scene11.body")}
        </motion.p>
        <motion.div className="mt-8 flex flex-col md:flex-row md:justify-center gap-3 text-massa-black font-mono text-sm md:text-base" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.7, y: 0 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.55 }}>
          {[t("scene11.pill1"), t("scene11.pill2"), t("scene11.pill3")].map((pill) => (
            <span key={pill} className="inline-flex items-center gap-2 px-4 py-2 border border-massa-black/40 bg-white/60 backdrop-blur-[2px]">
              <span className="h-[2px] w-6 bg-massa-black" />
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesScene;
