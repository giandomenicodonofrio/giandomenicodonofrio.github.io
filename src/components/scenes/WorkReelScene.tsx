import { useState } from "react";
import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";
import { projectCatalog, workReelIds } from "@/data/projects";

const vp = { once: true, amount: 0.15 as const };

const WorkReelScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.1);
  const projects = workReelIds.map((id, index) => ({
    ...projectCatalog[id],
    delay: 0.18 + index * 0.1,
  }));
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const [mobileProjectId, setMobileProjectId] = useState<string | null>(null);

  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const activeContent = activeProject.portfolio ?? activeProject.feature ?? {
    titleKeys: activeProject.titleKeys,
    whatKey: activeProject.id === "automation-stack" ? "scene09.tile.what" : "scene09.block.what",
    roleKey: activeProject.id === "automation-stack" ? "scene09.tile.role" : "scene09.block.role",
    impactKey: activeProject.id === "automation-stack" ? "scene09.tile.impact" : "scene09.block.impact",
    descKey: activeProject.id === "automation-stack" ? "scene09.tile.desc" : "scene09.block.desc",
    tagsKey: activeProject.id === "automation-stack" ? "scene09.tile.year" : "scene09.block.tags",
    ctaKey: activeProject.id === "automation-stack" ? "scene09.tile.cta" : "scene09.block.cta",
  };
  const mobileProject = projects.find((project) => project.id === mobileProjectId) ?? null;
  const mobileContent = mobileProject
    ? mobileProject.portfolio ?? mobileProject.feature ?? {
        titleKeys: mobileProject.titleKeys,
        whatKey: mobileProject.id === "automation-stack" ? "scene09.tile.what" : "scene09.block.what",
        roleKey: mobileProject.id === "automation-stack" ? "scene09.tile.role" : "scene09.block.role",
        impactKey: mobileProject.id === "automation-stack" ? "scene09.tile.impact" : "scene09.block.impact",
        descKey: mobileProject.id === "automation-stack" ? "scene09.tile.desc" : "scene09.block.desc",
        tagsKey: mobileProject.id === "automation-stack" ? "scene09.tile.year" : "scene09.block.tags",
        ctaKey: mobileProject.id === "automation-stack" ? "scene09.tile.cta" : "scene09.block.cta",
      }
    : null;

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-massa-paper overflow-visible md:overflow-hidden flex items-start md:items-center justify-center py-14 md:py-20">
      <motion.div className="absolute inset-0 grid-texture" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2 }} />

      <div className="relative z-20 flex w-[92vw] max-w-[1540px] flex-col gap-8">
        <motion.div
          className="flex flex-col items-center gap-5 text-center text-massa-black"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease: EASE_POWER3, delay: 0.08 }}
        >
          <h2 className="max-w-full break-words font-display text-[11vw] sm:text-[10vw] md:text-[8.2vw] leading-[0.85] uppercase">
            {t("scene04.title1")}<br />{t("scene04.title2")}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 font-mono text-xs opacity-60">
            <span>{t("scene04.meta.range")}</span>
            <span>{t("scene04.meta.interactive")}</span>
            <span>{t("scene04.meta.web")}</span>
          </div>
        </motion.div>

        <motion.div className="relative overflow-hidden border border-massa-black/10 bg-massa-surface shadow-[0_28px_70px_rgba(20,20,20,0.14)]" style={{ borderRadius: "36px" }} initial={{ opacity: 0, scaleY: 0.9, scaleX: 0.96 }} whileInView={{ opacity: 1, scaleY: 1, scaleX: 1 }} viewport={vp} transition={{ duration: 0.45, ease: EASE_POWER3, delay: 0.02 }}>
          <div className="border-b border-massa-black/10 px-6 py-8 md:px-8 xl:px-10 xl:py-9">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="flex flex-col gap-4">
                <span className="font-display text-massa-black text-[9vw] md:text-[3.8vw] xl:text-[3.2vw] leading-none uppercase">
                  {t("scene06.title")}
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-massa-black font-mono text-xs opacity-60 md:flex md:flex-wrap md:gap-6">
                  <span>{t("scene06.meta.left1")}</span>
                  <span>{t("scene06.meta.right1")}</span>
                  <span>{t("scene06.meta.left2")}</span>
                  <span>{t("scene06.meta.right2")}</span>
                  <span>{t("scene06.meta.left3")}</span>
                  <span>{t("scene06.meta.right3")}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-massa-black/75 xl:max-w-[56rem] xl:justify-end">
                {[t("scene06.cap1"), t("scene06.cap2"), t("scene06.cap3"), t("scene06.cap4"), t("scene06.cap5")].map((cap) => (
                  <span key={cap} className="inline-flex items-center gap-2">
                    <span className="h-[3px] w-6 bg-massa-red" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.35fr)_380px] 2xl:grid-cols-[minmax(0,1.45fr)_420px] gap-6 md:gap-8 w-full px-4 md:px-8 xl:px-10 py-8 xl:py-10 items-start content-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-6 2xl:gap-7 items-start content-start">
            {projects.map((project) => {
              const isActive = project.id === activeProject.id;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => {
                    setActiveProjectId(project.id);
                    setMobileProjectId(project.id);
                  }}
                  className={`group w-full bg-massa-surface text-massa-black border flex flex-col overflow-hidden text-left shadow-[0_12px_28px_rgba(20,20,20,0.12)] backdrop-blur-[2px] transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer ${
                    isActive ? "border-massa-red shadow-[0_20px_48px_rgba(20,20,20,0.16)]" : "border-massa-black/12 hover:border-massa-red/70"
                  }`}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.45, ease: EASE_POWER2, delay: project.delay }}
                >
                  <div className="w-full h-40 xl:h-52 2xl:h-56 overflow-hidden">
                    <motion.img src={project.image} alt={project.titleKeys.map((key) => t(key)).join(" ")} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
                  </div>
                  <div className="p-6 xl:p-6 2xl:p-7 flex flex-col gap-3">
                    <div className="font-display text-[4.8vw] md:text-[2.4vw] xl:text-[1.85vw] 2xl:text-[1.65vw] leading-[0.95] uppercase break-words">
                      {project.titleKeys.map((key) => t(key)).join(" ")}
                    </div>
                    <div className="font-mono text-sm xl:text-sm 2xl:text-[15px] opacity-85 tracking-[0.04em]">{t(project.reel!.roleKey)}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.aside
            key={activeProject.id}
            className="hidden xl:block h-full min-h-[620px] bg-massa-paper border border-massa-black/10 text-massa-black rounded-[28px] px-7 py-8 2xl:px-8 2xl:py-9 shadow-[0_18px_40px_rgba(20,20,20,0.1)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: EASE_POWER2 }}
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-massa-red">{t("scene06.detail.label")}</div>
                <h3 className="font-display text-[2.5vw] 2xl:text-[2.15vw] leading-[0.9] uppercase break-words">
                  {activeContent.titleKeys.map((key) => t(key)).join(" ")}
                </h3>
                {activeContent.whatKey && (
                  <p className="font-mono text-sm md:text-base leading-[1.6] opacity-85">{t(activeContent.whatKey)}</p>
                )}
              </div>

              <div className="grid gap-4">
                {activeContent.roleKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.roleLabel")}</div>
                    <p className="mt-2 font-mono text-sm md:text-base leading-[1.6] opacity-85">{t(activeContent.roleKey)}</p>
                  </div>
                )}
                {activeContent.impactKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.impactLabel")}</div>
                    <p className="mt-2 font-mono text-sm md:text-base leading-[1.6] opacity-85">{t(activeContent.impactKey)}</p>
                  </div>
                )}
                {activeContent.descKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.descLabel")}</div>
                    <p className="mt-2 font-mono text-sm md:text-base leading-[1.7] opacity-80">{t(activeContent.descKey)}</p>
                  </div>
                )}
                {activeContent.tagsKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.stackLabel")}</div>
                    <p className="mt-2 font-mono text-sm tracking-[0.08em] opacity-75">{t(activeContent.tagsKey)}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
        </motion.div>
      </div>

      {mobileProject && mobileContent && (
        <div className="fixed inset-0 z-[80] xl:hidden">
          <button
            type="button"
            aria-label={t("scene06.detail.close")}
            className="absolute inset-0 bg-massa-black/45 backdrop-blur-[3px]"
            onClick={() => setMobileProjectId(null)}
          />
          <motion.div
            className="absolute inset-0 overflow-y-auto bg-massa-paper px-5 py-6 text-massa-black"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: EASE_POWER2 }}
          >
            <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col">
              <div className="flex items-start justify-between gap-4 border-b border-massa-black/10 pb-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-massa-red">{t("scene06.detail.label")}</div>
                <button
                  type="button"
                  onClick={() => setMobileProjectId(null)}
                  className="font-mono text-xs uppercase tracking-[0.14em] opacity-70 transition-opacity hover:opacity-100"
                >
                  {t("scene06.detail.close")}
                </button>
              </div>

              <div className="mt-5 space-y-5 pb-10">
                <h3 className="font-display text-[12vw] leading-[0.9] uppercase">
                  {mobileContent.titleKeys.map((key) => t(key)).join(" ")}
                </h3>
                {mobileContent.whatKey && (
                  <p className="font-mono text-sm leading-[1.6] opacity-85">{t(mobileContent.whatKey)}</p>
                )}

                {mobileContent.roleKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.roleLabel")}</div>
                    <p className="mt-2 font-mono text-sm leading-[1.6] opacity-85">{t(mobileContent.roleKey)}</p>
                  </div>
                )}
                {mobileContent.impactKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.impactLabel")}</div>
                    <p className="mt-2 font-mono text-sm leading-[1.6] opacity-85">{t(mobileContent.impactKey)}</p>
                  </div>
                )}
                {mobileContent.descKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.descLabel")}</div>
                    <p className="mt-2 font-mono text-sm leading-[1.7] opacity-80">{t(mobileContent.descKey)}</p>
                  </div>
                )}
                {mobileContent.tagsKey && (
                  <div className="border-t border-massa-black/10 pt-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-50">{t("scene06.detail.stackLabel")}</div>
                    <p className="mt-2 font-mono text-sm tracking-[0.08em] opacity-75">{t(mobileContent.tagsKey)}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default WorkReelScene;
