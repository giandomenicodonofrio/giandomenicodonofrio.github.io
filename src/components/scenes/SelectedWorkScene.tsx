import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const SelectedWorkScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.2);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-paper overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 bg-massa-paper" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2 }} />

      <motion.h2 className="font-display text-massa-black text-[14vw] md:text-[9vw] leading-[0.85] uppercase z-10 text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.7, ease: EASE_POWER3, delay: 0.16 }}>
        {t("scene04.title1")}<br />{t("scene04.title2")}
      </motion.h2>

      <motion.div className="absolute bottom-[10vh] left-0 w-full flex justify-center gap-12 font-mono text-massa-black text-xs z-10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.5, y: 0 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2, delay: 0.36 }}>
        <span>{t("scene04.meta.range")}</span>
        <span>{t("scene04.meta.interactive")}</span>
        <span>{t("scene04.meta.web")}</span>
      </motion.div>
    </section>
  );
};

export default SelectedWorkScene;
