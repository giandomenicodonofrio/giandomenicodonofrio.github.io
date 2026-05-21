import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { EASE_POWER2, variants, makeStagger } from "../SceneWrapper";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const WhatIBuildScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.18);

  return (
    <section ref={ref} className="relative w-full min-h-[42vh] bg-massa-red flex items-center justify-center overflow-hidden px-6">    
      <motion.div className="absolute inset-0 z-5 pointer-events-none" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.02 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER2, delay: 0.1 }}>
        <div className="absolute top-[30%] left-[6%] w-[50%] h-[2px] bg-massa-black" />
        <div className="absolute top-[65%] left-[12%] w-[30%] h-[2px] bg-massa-black" />
      </motion.div>

      <motion.div className="clip-reveal z-10 w-full max-w-5xl text-left" variants={makeStagger(0.06, 0.08)} initial="hidden" whileInView="show" viewport={vp}>
        <motion.h2 className="font-display text-massa-black text-[9vw] md:text-[3.2vw] leading-[0.9] uppercase" variants={variants.heavyReveal}>
          {t("scene02.title")}
        </motion.h2>
        <motion.p className="font-mono text-massa-black text-base md:text-xl opacity-95 leading-[1.5] mt-3 max-w-[280px] md:max-w-[560px]" variants={variants.subtleText}>
          {t("scene02.subtitle")}
        </motion.p>
        <motion.div className="mt-7 flex flex-col gap-2" variants={makeStagger(0.05, 0.05)}>
          {[t("scene02.item1"), t("scene02.item2"), t("scene02.item3"), t("scene02.item4")].map((item) => (
            <motion.div key={item} className="border-t border-massa-black/40 pt-3" variants={variants.subtleText}>
              <span className="font-mono text-base md:text-lg opacity-95 leading-[1.5] tracking-tight">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIBuildScene;
