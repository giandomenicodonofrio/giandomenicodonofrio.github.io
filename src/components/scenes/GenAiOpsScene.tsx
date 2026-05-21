import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3, makeStagger, variants } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";
import { featuredProjectId, projectCatalog } from "@/data/projects";

const vp = { once: true, amount: 0.3 as const };
const patternRows = Array(6).fill("GEN AI DELIVERY");

const GenAiOpsScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.18);
  const project = projectCatalog[featuredProjectId];
  const content = project.feature!;

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-paper overflow-hidden pt-36 md:pt-40">
      <motion.div className="absolute inset-0 flex flex-col justify-center pointer-events-none" style={{ y }} variants={makeStagger(0.05, 0.05)} initial="hidden" whileInView="show" viewport={vp}>
        {patternRows.map((text, i) => (
          <motion.div key={i} className="font-display text-massa-black text-[6vw] md:text-[5vw] leading-[1.2] uppercase whitespace-nowrap" variants={variants.patternLine} animate={{ opacity: 0.03 + i * 0.0025 }}>
            {text}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <motion.div className="bg-massa-surface border border-massa-black/10 w-full md:w-[55vw] min-h-[55vh] flex flex-col overflow-hidden shadow-[0_24px_60px_rgba(20,20,20,0.12)] transition-transform duration-200 hover:-translate-y-2 hover:border-massa-red/60 cursor-pointer" initial={{ opacity: 0, y: 36, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={vp} transition={{ duration: 0.6, ease: EASE_POWER3, delay: 0.12 }}>
          <div className="w-full h-48 md:h-56 overflow-hidden">
            <motion.img src={project.image} alt={content.titleKeys.map((key) => t(key)).join(" ")} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
          </div>
          <motion.div className="p-8 md:p-12 flex-1 flex flex-col gap-4" variants={makeStagger(0.08, 0.12)} initial="hidden" whileInView="show" viewport={vp}>
            <motion.h3 className="font-display text-massa-black text-[7vw] md:text-[3.1vw] leading-[0.9] uppercase" variants={variants.heavyReveal}>
              {content.titleKeys.map((key) => t(key)).join("\n").split("\n").map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </motion.h3>
            <motion.p className="font-mono text-massa-black text-base opacity-80 leading-relaxed max-w-[420px]" variants={variants.subtleText}>
              {t(content.whatKey!)}
            </motion.p>
            <motion.div className="space-y-1" variants={variants.subtleText}>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-75">Role</span>
              <p className="font-mono text-sm opacity-80">{t(content.roleKey!)}</p>
            </motion.div>
            <motion.div className="space-y-1" variants={variants.subtleText}>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">Impact</span>
              <p className="font-mono text-sm opacity-70">{t(content.impactKey!)}</p>
            </motion.div>
            <motion.p className="font-mono text-massa-black text-xs opacity-55 max-w-[420px] leading-relaxed" variants={variants.subtleText}>
              {t(content.descKey!)}
            </motion.p>
            <motion.div className="font-mono text-massa-black text-sm flex justify-between items-center opacity-75 mt-4 cursor-pointer" variants={variants.subtleText}>
              <span>{t(content.metaRoleKey!)}</span>
              <span>{t(content.yearKey!)}</span>
              <a href={project.href} className="underline underline-offset-4 decoration-1 hover:opacity-100 opacity-85 cursor-pointer">{t(content.ctaKey!)}</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenAiOpsScene;
