import { useI18n, Lang } from "@/lib/i18n";

const LangSwitcher = () => {
  const { lang, setLang } = useI18n();
  const toggle = () => setLang(lang === "en" ? "it" : "en");

  const btn = "px-3 py-1 text-xs font-mono border border-massa-black/20 bg-massa-surface text-massa-black shadow-sm hover:border-massa-red hover:text-massa-red transition-colors";

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2" aria-label="Language switcher">
      <button className={`${btn} ${lang === "en" ? "opacity-100" : "opacity-60"}`} onClick={() => setLang("en" as Lang)}>
        EN
      </button>
      <button className={`${btn} ${lang === "it" ? "opacity-100" : "opacity-60"}`} onClick={() => setLang("it" as Lang)}>
        IT
      </button>
      <button className={`${btn} hidden md:inline`} onClick={toggle}>
        ⇄
      </button>
    </div>
  );
};

export default LangSwitcher;
