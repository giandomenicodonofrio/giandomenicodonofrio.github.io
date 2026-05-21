import { useI18n } from "@/lib/i18n";

const footerLinks = [
  { href: "#hero", labelKey: "timeline.hero" },
  { href: "#work-reel", labelKey: "timeline.work-reel" },
  { href: "#gen-ai-ops", labelKey: "timeline.gen-ai-ops" },
  { href: "#about", labelKey: "timeline.about" },
  { href: "#contact", labelKey: "timeline.contact" },
];

const PortfolioFooter = () => {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-massa-paper text-massa-black px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 border-t border-massa-black/15 pt-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <div className="max-w-full break-words font-display text-[9vw] leading-[0.88] uppercase sm:text-[8vw] md:text-[3.2vw]">
            Giandomenico
            <br />
            D&apos;Onofrio
          </div>
          <p className="max-w-md font-mono text-sm leading-[1.7] text-massa-black/70">
            {t("footer.summary")}
          </p>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-massa-black/45">
            {t("footer.contact")}
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm">
            <a href="mailto:giandomenico1998@gmail.com" className="transition-opacity hover:opacity-100 opacity-80">
              giandomenico1998@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/giandomenicodonofrio/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-100 opacity-80">
              LinkedIn
            </a>
            <a href="https://github.com/giandomenicodonofrio" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-100 opacity-80">
              GitHub
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-massa-black/45">
            {t("footer.navigate")}
          </div>
          <div className="flex flex-col gap-3 font-mono text-sm">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-opacity hover:opacity-100 opacity-80">
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-massa-black/15 pt-5 font-mono text-xs text-massa-black/45 md:flex-row md:items-center md:justify-between">
        <span>{t("scene15.footer")}</span>
        <span>{t("footer.location")}</span>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
