import { motion } from "framer-motion";
import { EASE_POWER2, EASE_POWER3 } from "../SceneWrapper";
import { useI18n } from "@/lib/i18n";
import { useParallax } from "@/hooks/useParallax";

const vp = { once: true, amount: 0.3 as const };

const ContactScene = () => {
  const { t } = useI18n();
  const { ref, y } = useParallax(0.12);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent("New project inquiry");
    const body = encodeURIComponent(`Name: ${name || "-"}\nEmail: ${email || "-"}\n\n${message || ""}`);
    window.location.href = `mailto:giandomenico1998@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <></>
    // <section ref={ref} className="relative w-full min-h-screen bg-massa-red overflow-hidden flex items-center justify-center px-6 mt-16 md:mt-24">
    //   <motion.div className="absolute inset-0 bg-massa-red" style={{ y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ duration: 0.35, ease: EASE_POWER2 }} />

    //   <motion.div className="relative z-10 w-full max-w-4xl bg-massa-black text-massa-white rounded-[28px] p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.35)] flex flex-col gap-6" initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.65, ease: EASE_POWER3, delay: 0.14 }}>
    //     {/* <div className="flex flex-col gap-2">
    //       <span className="font-display text-[7vw] md:text-[3vw] leading-tight uppercase">{t("scene15.headline")}</span>
    //       <p className="font-mono text-sm md:text-base opacity-80 leading-relaxed max-w-3xl">{t("scene15.sub")}</p>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center font-mono text-sm md:text-base opacity-90">
    //       <span className="uppercase tracking-[0.12em] text-xs md:text-sm">{t("scene15.form.emailLabel")}</span>
    //       <a href="mailto:giandomenico1998@gmail.com" className="underline underline-offset-4 decoration-1 hover:opacity-100 opacity-90 cursor-pointer">giandomenico1998@gmail.com</a>
    //       <span className="uppercase tracking-[0.12em] text-xs md:text-sm">{t("scene15.form.profilesLabel")}</span>
    //       <div className="flex gap-4 underline underline-offset-4 decoration-1">
    //         <a href="https://www.linkedin.com/in/giandomenicodonofrio/" target="_blank" rel="noreferrer">LinkedIn</a>
    //         <a href="https://github.com/giandomenicodonofrio" target="_blank" rel="noreferrer">GitHub</a>
    //       </div>
    //     </div>

    //     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    //       <div className="flex flex-col gap-2">
    //         <label className="font-mono text-xs uppercase tracking-[0.12em] opacity-80">{t("scene15.form.nameLabel")}</label>
    //         <input name="name" className="bg-transparent border border-massa-white/40 px-4 py-3 font-mono text-base min-h-[44px] focus:outline-none focus:border-massa-white" placeholder={t("scene15.form.namePlaceholder")} required />
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <label className="font-mono text-xs uppercase tracking-[0.12em] opacity-80">{t("scene15.form.emailLabel")}</label>
    //         <input type="email" name="email" className="bg-transparent border border-massa-white/40 px-4 py-3 font-mono text-base min-h-[44px] focus:outline-none focus:border-massa-white" placeholder={t("scene15.form.emailPlaceholder")} required />
    //       </div>
    //       <div className="flex flex-col gap-2 md:col-span-2">
    //         <label className="font-mono text-xs uppercase tracking-[0.12em] opacity-80">{t("scene15.form.messageLabel")}</label>
    //         <textarea name="message" rows={4} className="bg-transparent border border-massa-white/40 px-4 py-3 font-mono text-base min-h-[44px] focus:outline-none focus:border-massa-white resize-none" placeholder={t("scene15.form.messagePlaceholder")} required />
    //       </div>
    //       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:col-span-2">
    //         <button type="submit" className="cursor-pointer font-mono font-semibold text-xs md:text-sm uppercase tracking-[0.16em] px-6 py-4 border border-massa-white bg-massa-white text-massa-black hover:bg-massa-white/85 hover:text-massa-black transition-colors duration-200">
    //           {t("scene15.cta.primary")}
    //         </button>
    //       </div>
    //     </form> */}
    //   </motion.div>
    // </section>
  );
};

export default ContactScene;
