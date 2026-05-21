import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useParallax } from "@/hooks/useParallax";
import WhatIBuildScene from "./WhatIBuildScene";

const vp = { once: true, amount: 0.3 as const };

const HeroScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.12);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-red flex items-center justify-center overflow-hidden px-6 py-20 md:py-24">
      <motion.div className="absolute inset-0 grid-texture" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.05 }} viewport={vp} transition={{ duration: 0.6, ease: EASE_POWER2 }} />

      <motion.div className="absolute inset-0 z-5 pointer-events-none" style={{ y }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.06, y: 0 }} viewport={vp} transition={{ duration: 0.55, ease: EASE_POWER2, delay: 0.25 }}>
        <div className="w-[260px] h-[1px] bg-massa-black absolute top-[30%] left-[15%]" />
        <div className="w-[1px] h-[180px] bg-massa-black absolute top-[25%] right-[28%]" />
        <div className="w-[90px] h-[1px] bg-massa-black absolute bottom-[38%] right-[22%]" />
      </motion.div>

      <motion.div className="relative z-10 w-full max-w-5xl flex flex-col gap-12 md:gap-16 items-start md:items-center text-left md:text-center" initial={{ opacity: 0, scale: 0.94, y: 10 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6, ease: EASE_POWER3, delay: 0.12 }}>
        <div className="flex flex-col gap-6 md:gap-8 items-start md:items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-massa-black" />
            <motion.span className="font-mono text-massa-black text-xs md:text-sm tracking-[0.28em] uppercase" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 0.65, y: 0 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2, delay: 0.22 }}>
              {t("scene01.tagline")}
            </motion.span>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 items-start md:items-center">
            <motion.h1 className="font-display text-massa-black text-[14vw] md:text-[9.5vw] leading-[0.85] uppercase" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55, ease: EASE_POWER3, delay: 0.28 }}>
              {t("scene01.heading1")}<br />{t("scene01.heading2")}
            </motion.h1>
            <motion.p className="font-mono text-massa-black text-base md:text-[26px] leading-[1.5] max-w-[280px] md:max-w-[560px] mt-[10px] opacity-95" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 0.9, y: 0 }} viewport={vp} transition={{ duration: 0.5, ease: EASE_POWER2, delay: 0.36 }}>
              {t("scene01.hero")}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.44 }}>
              <a href="#work-reel" className="cursor-pointer font-mono text-xs md:text-sm uppercase tracking-[0.16em] px-4 md:px-6 py-[10px] md:py-3 min-h-[44px] text-[14px] md:text-sm border border-massa-black bg-massa-black text-massa-white hover:bg-transparent hover:text-massa-black transition-colors duration-200">
                {t("scene01.cta.work")}
              </a>
              <a href="#contact" className="cursor-pointer font-mono text-xs md:text-sm uppercase tracking-[0.16em] px-4 md:px-6 py-[10px] md:py-3 min-h-[44px] text-[14px] md:text-sm border border-massa-black/60 text-massa-black/80 hover:border-massa-black hover:text-massa-white hover:bg-massa-black transition-colors duration-200">
                {t("scene01.cta.contact")}
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full">
          <WhatIBuildScene />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroScene;
