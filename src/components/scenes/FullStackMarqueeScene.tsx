import { motion } from "framer-motion";
import { EASE_POWER2, makeStagger, variants } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const FullStackMarqueeScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.25);
  const text = t("scene07.row");
  const rows = Array(8).fill(text);

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-red overflow-hidden flex flex-col justify-center pt-32 md:pt-40">
      <motion.div style={{ y }} variants={makeStagger(0.06, 0.05)} initial="hidden" whileInView="show" viewport={vp}>
        {rows.map((row, i) => (
          <motion.div key={i} className="font-display text-massa-black text-[7vw] md:text-[5.5vw] leading-[1.1] uppercase whitespace-nowrap" variants={variants.patternLine} animate={{ opacity: i % 2 === 0 ? 0.05 : 0.04 }}>
            {row}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FullStackMarqueeScene;
