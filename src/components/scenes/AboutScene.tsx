import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const AboutScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.15);
  const skills = [
    t("scene14.skill1"), t("scene14.skill2"), t("scene14.skill3"),
    t("scene14.skill4"), t("scene14.skill5"), t("scene14.skill6"),
  ];
  const stack = t("scene14.stack.list").split("|").map((s) => s.trim()).filter(Boolean);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-red overflow-hidden flex items-center justify-center px-6 pt-32 md:pt-40 pb-24 md:pb-32">
      <motion.div className="absolute inset-0 bg-massa-red" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2 }} />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
        <motion.div className="w-[70vw] h-[70vw] md:w-full md:h-full max-w-[420px] max-h-[420px] bg-massa-black rounded-full flex items-center justify-center overflow-hidden mx-auto" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.7, ease: EASE_POWER3, delay: 0.14 }}>
          <motion.div className="text-center px-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, ease: EASE_POWER3, delay: 0.35 }}>
            <span className="font-display text-massa-white text-[6vw] md:text-[3vw] uppercase block">{t("scene14.about")}</span>
            <div className="mt-6 space-y-1">
              {skills.map((s, i) => (
                <motion.div key={s} className="font-mono text-massa-white text-xs opacity-50" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={vp} transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}>
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="bg-massa-black text-massa-white p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.35)] flex flex-col gap-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55, ease: EASE_POWER3, delay: 0.2 }}>
          <div className="flex flex-col gap-1">
            <span className="font-display text-[5.7vw] md:text-[2.05vw] leading-snug uppercase">Giandomenico D'Onofrio</span>
            <span className="font-mono text-sm md:text-base uppercase opacity-90">Full-stack developer • AI systems</span>
          </div>
          <p className="font-mono text-base md:text-lg opacity-90 leading-[1.6]">{t("scene14.bio")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm md:text-base opacity-85">
            <span className="inline-flex items-center gap-2"><span className="h-[2px] w-6 bg-massa-red" />{t("scene14.special1")}</span>
            <span className="inline-flex items-center gap-2"><span className="h-[2px] w-6 bg-massa-red" />{t("scene14.special2")}</span>
            <span className="inline-flex items-center gap-2"><span className="h-[2px] w-6 bg-massa-red" />{t("scene14.special3")}</span>
          </div>
          <span className="font-mono text-sm md:text-base opacity-85 border-t border-massa-grid pt-3 mt-2">{t("scene14.stack")}</span>
          <div className="flex flex-wrap gap-2 pt-1">
            {stack.map((item) => (
              <span key={item} className="font-mono text-xs md:text-sm px-3 py-2 border border-massa-white/30 rounded-full bg-white/5">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutScene;
