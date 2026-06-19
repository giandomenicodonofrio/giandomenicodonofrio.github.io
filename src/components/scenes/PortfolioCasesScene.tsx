import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";
import { portfolioCaseIds, projectCatalog } from "@/data/projects";

const vp = { once: true, amount: 0.3 as const };

const PortfolioCasesScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.12);
  const cards = portfolioCaseIds.map((id) => projectCatalog[id]);

  return (
    <section ref={ref} className="relative w-full bg-massa-paper overflow-visible py-16 md:py-24">
      <motion.div className="absolute inset-0 grid-texture" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.12 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2 }} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 md:gap-8 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="md:absolute md:top-4 md:left-6 font-mono text-massa-black text-xs uppercase tracking-[0.2em]">Selected work</div>
        {cards.map((project, index) => {
          const content = project.portfolio!;
          const isPrimary = index === 0;
          const isExternalLink = project.href.startsWith("http");

          return (
            <motion.div
              key={project.id}
              className={`bg-massa-surface border border-massa-black/10 w-full ${isPrimary ? "md:col-span-2 xl:col-span-7" : "md:col-span-1 xl:col-span-5"} flex flex-col overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(20,20,20,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:border-massa-red/60 cursor-pointer`}
              initial={isPrimary ? { opacity: 0, y: 30, scale: 0.97 } : { opacity: 0, x: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={vp}
              transition={{ duration: isPrimary ? 0.6 : 0.55, ease: EASE_POWER3, delay: isPrimary ? 0.1 : 0.25 }}
            >
              <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9]">
                <motion.img src={project.image} alt={content.titleKeys.map((key) => t(key)).join(" ")} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
              </div>
              <div className={`${isPrimary ? "p-12 md:p-14 gap-5" : "p-10 md:p-11 gap-4"} flex flex-col justify-between flex-1`}>
                <div className="space-y-4">
                  <h3 className={`font-display text-massa-black ${isPrimary ? "text-[6vw] md:text-[2.12vw]" : "text-[6vw] md:text-[2vw]"} leading-[0.9] uppercase tracking-tight`}>
                    {content.titleKeys.map((key) => t(key)).join("\n").split("\n").map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </h3>
                  <p className={`font-mono text-massa-black text-base opacity-75 leading-[1.4] ${isPrimary ? "max-w-[380px]" : "max-w-[320px]"}`}>{t(content.whatKey!)}</p>
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">Role</span>
                    <p className="font-mono text-sm text-massa-black opacity-75">{t(content.roleKey!)}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">Impact</span>
                    <p className="font-mono text-sm text-massa-black opacity-70">{t(content.impactKey!)}</p>
                  </div>
                  <p className={`font-mono text-massa-black text-base opacity-70 leading-[1.4] ${isPrimary ? "max-w-[400px]" : "max-w-[320px]"}`}>{t(content.descKey!)}</p>
                </div>
                <div className={`flex items-center justify-between ${isPrimary ? "pt-2" : "pt-1"} text-sm`}>
                  <span className="font-mono text-massa-black opacity-70">{t(content.tagsKey!)}</span>
                  <a
                    href={project.href}
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noreferrer" : undefined}
                    className="font-mono text-massa-black underline underline-offset-4 decoration-1 hover:opacity-100 opacity-85 cursor-pointer"
                  >
                    {t(content.ctaKey!)}
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div className="mt-8 md:mt-12 flex justify-start md:justify-center px-4 md:px-0 font-mono text-massa-black text-xs" initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2, delay: 0.4 }}>
        {t("scene05.footer")}
      </motion.div>
    </section>
  );
};

export default PortfolioCasesScene;
