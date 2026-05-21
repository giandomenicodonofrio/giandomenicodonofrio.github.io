import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const sections = [
  { id: "hero", key: "timeline.hero" },
  { id: "digital-systems", key: "timeline.digital-systems" },
  { id: "work-reel", key: "timeline.work-reel" },
  { id: "gen-ai-ops", key: "timeline.gen-ai-ops" },
  { id: "principles", key: "timeline.principles" },
  { id: "ai-statement", key: "timeline.ai-statement" },
  { id: "about", key: "timeline.about" },
  { id: "contact", key: "timeline.contact" },
];

const SectionTimeline = () => {
  const { t } = useI18n();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.4 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 top-1/4 z-[60] hidden md:flex flex-col items-start gap-3">
      <div className="h-full w-px bg-massa-black/15 translate-x-2" aria-hidden />
      {sections.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            className={`relative flex items-center gap-2 text-left text-xs font-mono transition-opacity duration-200 ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full border transition-all duration-200 ${
                isActive ? "border-massa-red bg-massa-red" : "border-massa-black/45 bg-transparent"
              }`}
            />
            <span className="text-massa-black">{t(s.key)}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionTimeline;
