import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const AiStatementScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.22);
  const capabilities = t("scene12.keywords").split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-paper overflow-hidden flex items-center justify-center pt-28 md:pt-36">
      <motion.div className="absolute inset-0 bg-massa-paper" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2 }} />

      <div className="clip-reveal z-10 flex flex-col items-center">
        <motion.span className="font-display text-massa-black text-[30vw] md:text-[22vw] leading-none select-none" initial={{ opacity: 0, scale: 0.95, y: 60 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8, ease: EASE_POWER3, delay: 0.18 }}>
          {t("scene12.big")}
        </motion.span>
        <motion.span className="font-mono text-massa-black text-xs tracking-[0.3em] uppercase mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 0.45 }} viewport={vp} transition={{ duration: 0.4, delay: 0.5 }}>
          {t("scene12.sub")}
        </motion.span>
        <motion.div className="font-mono text-massa-black text-[15px] md:text-lg opacity-90 mt-5 text-center px-6 md:px-8 leading-[1.5] max-w-[280px] md:max-w-none" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 0.85, y: 0 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.6 }}>
          {t("scene12.line")}
        </motion.div>
        <motion.div className="mt-5 flex flex-wrap justify-center gap-2" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 0.8, y: 0 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.68 }}>
          {capabilities.map((cap) => (
            <span key={cap} className="font-mono text-xs md:text-sm px-3 py-2 border border-massa-black/30 bg-white/60 text-massa-black rounded-full">
              {cap}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AiStatementScene;
