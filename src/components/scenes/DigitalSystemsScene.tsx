import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const DigitalSystemsScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.15);
  const services = [
    { label: t("scene03.service.frontend.label"), desc: t("scene03.service.frontend.desc") },
    { label: t("scene03.service.backend.label"), desc: t("scene03.service.backend.desc") },
    { label: t("scene03.service.cloud.label"), desc: t("scene03.service.cloud.desc") },
  ];

  return (
    <section ref={ref} className="relative w-full bg-massa-paper overflow-visible py-16 md:py-24">
      <motion.div className="absolute inset-0 grid-texture" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.12 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2 }} />

      <motion.div className="relative z-10 flex items-center justify-center px-4 md:px-6" initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={vp} transition={{ duration: 0.5, ease: EASE_POWER3, delay: 0.12 }}>
        <div className="bg-massa-surface text-massa-black border border-massa-black/10 w-full max-w-5xl flex flex-col justify-between p-6 md:p-12 gap-8 md:gap-10 shadow-[0_24px_60px_rgba(20,20,20,0.12)]">
          <motion.h2 className="font-display text-massa-black text-[6.4vw] md:text-[3.5vw] leading-[0.95] uppercase" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, ease: EASE_POWER3, delay: 0.22 }}>
            {t("scene03.heading1")}<br />{t("scene03.heading2")}<br />{t("scene03.heading3")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
            {[
              { title: t("scene03.value.strategy.title"), desc: t("scene03.value.strategy.desc") },
              { title: t("scene03.value.build.title"), desc: t("scene03.value.build.desc") },
              { title: t("scene03.value.delivery.title"), desc: t("scene03.value.delivery.desc") },
            ].map((item, i) => (
              <motion.div key={item.title} className="flex flex-col gap-2" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 0.95, y: 0 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2, delay: 0.28 + i * 0.06 }}>
                <span className="font-display text-massa-black text-lg uppercase tracking-tight">{item.title}</span>
                <span className="font-mono text-massa-black text-base leading-[1.5] opacity-75">{item.desc}</span>
              </motion.div>
            ))}
          </div>
          <div className="space-y-5">
            {services.map((s, i) => (
              <motion.div key={s.label} className="flex flex-col md:flex-row md:items-baseline md:justify-between border-t border-massa-black/15 pt-4 gap-3" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.85, y: 0 }} viewport={vp} transition={{ duration: 0.4, ease: EASE_POWER2, delay: 0.32 + i * 0.08 }}>
                <span className="font-display text-massa-black text-base md:text-lg uppercase tracking-tight">{s.label}</span>
                <span className="font-mono text-massa-black text-base opacity-75 text-left md:text-right leading-[1.6] md:max-w-[70%]">{s.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalSystemsScene;
