import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type Lang = "en" | "it";

type Dict = Record<Lang, Record<string, string>>;

const translations: Dict = {
  en: {
    // Timeline labels
    "timeline.hero": "Intro",
    "timeline.what-i-build": "Full Stack + AI",
    "timeline.digital-systems": "Digital Systems",
    "timeline.selected-work": "Selected Work",
    "timeline.portfolio-cases": "Portfolio Cases",
    "timeline.work-reel": "Work",
    "timeline.gen-ai-ops": "Gen AI Ops",
    "timeline.composable-systems": "Composable",
    "timeline.principles": "Principles",
    "timeline.ai-statement": "AI Statement",
    "timeline.about": "About",
    "timeline.contact": "Contact",
    "footer.summary": "Full stack and AI engineer building dashboards, AI workflows and digital products that teams actually use.",
    "footer.contact": "Contact",
    "footer.navigate": "Navigate",
    "footer.location": "Based in Italy · Remote-first across CET",

    // Scene01
    "scene01.tagline": "Giandomenico D'Onofrio - Full Stack & AI",
    "scene01.heading1": "FULL STACK",
    "scene01.heading2": "+ AI",
    "scene01.hero": "I design and build dashboards, digital systems and AI products people actually use.",
    "scene01.cta.work": "View work",
    "scene01.cta.contact": "Let’s talk",

    // Scene02 (what I build)
    "scene02.title": "WHAT I BUILD",
    "scene02.subtitle": "Design + engineering for shipped, usable products.",
    "scene02.item1": "Operational dashboards",
    "scene02.item2": "Integrated AI systems",
    "scene02.item3": "Workflow automation",
    "scene02.item4": "Full-stack digital products",

    // Scene03 services
    "scene03.heading1": "BUILDING",
    "scene03.heading2": "DIGITAL",
    "scene03.heading3": "SYSTEMS",
    "scene03.value.strategy.title": "Strategy",
    "scene03.value.strategy.desc": "Frame the problem, pick the right bets, remove noise.",
    "scene03.value.build.title": "Build",
    "scene03.value.build.desc": "Frontend, backend and AI integrations shipped end-to-end.",
    "scene03.value.delivery.title": "Delivery",
    "scene03.value.delivery.desc": "Production-first: performance, clarity, monitoring and handover.",
    "scene03.service.frontend.label": "FRONTEND",
    "scene03.service.frontend.desc": "Interfaces for complex data. React, Next.js, TypeScript, Tailwind, Framer Motion.",
    "scene03.service.backend.label": "BACKEND",
    "scene03.service.backend.desc": "APIs and services. Node.js, NestJS, Express, Prisma, PostgreSQL.",
    "scene03.service.cloud.label": "CLOUD",
    "scene03.service.cloud.desc": "Reliable infra. AWS (Lambda, API Gateway, S3), Azure (Functions, App Service).",

    // Scene04
    "scene04.title1": "SELECTED",
    "scene04.title2": "WORK",
    "scene04.meta.range": "2021 - 2026",
    "scene04.meta.interactive": "INTERACTIVE",
    "scene04.meta.web": "WEB",

    // Scene05
    "scene05.card1.title1": "ASCLEPIUS",
    "scene05.card1.title2": "ECG AI",
    "scene05.card1.what": "AI system for ECG analysis and clinical monitoring.",
    "scene05.card1.role": "Role — Product design, frontend, AI integration.",
    "scene05.card1.impact": "Impact — Faster triage and clearer insight for clinicians.",
    "scene05.card1.desc": "Multiclass ECG arrhythmia classifier with ensemble DL models, ablation studies and reproducible evaluation.",
    "scene05.card1.tags": "PYTORCH | MLOPS | 2025",
    "scene05.card1.cta": "View case study →",
    "scene05.card2.title1": "ECG",
    "scene05.card2.title2": "DASHBOARD",
    "scene05.card2.what": "Operational dashboard for real-time ECG workflow.",
    "scene05.card2.role": "Role — Frontend, data viz, UX for clinicians.",
    "scene05.card2.impact": "Impact — Clearer signal quality, faster decisions.",
    "scene05.card2.desc": "Frontend to explore model outputs, signal quality and ablations with clear clinical-friendly visuals.",
    "scene05.card2.tags": "NEXT.JS | 2025",
    "scene05.card2.cta": "Open project →",
    "scene05.footer": "",

    // Scene06
    "scene06.title": "WORK",
    "scene06.meta.left1": "AI SYSTEMS",
    "scene06.meta.left2": "AUTOMATION",
    "scene06.meta.left3": "FRONTEND",
    "scene06.meta.right1": "AI + WEB PROJECTS",
    "scene06.meta.right2": "2021-PRESENT",
    "scene06.meta.right3": "REMOTE-FIRST",
    "scene06.cap1": "AI products",
    "scene06.cap2": "Operational dashboards",
    "scene06.cap3": "Internal tools",
    "scene06.cap4": "Automation pipelines",
    "scene06.cap5": "Design engineering",
    "scene06.detail.label": "Project Brief",
    "scene06.detail.roleLabel": "Role",
    "scene06.detail.impactLabel": "Impact",
    "scene06.detail.descLabel": "Details",
    "scene06.detail.stackLabel": "Stack",
    "scene06.detail.close": "Close",
    "scene06.p1.role": "R&D Lead - 2025",
    "scene06.p2.role": "Frontend - 2025",
    "scene06.p3.role": "Low-code + API - 2024",
    "scene06.p4.role": "Backend - 2023",

    // Scene07
    "scene07.row": "FULL STACK + AI",

    // Scene08
    "scene08.title1": "GEN",
    "scene08.title2": "AI OPS",
    "scene08.what": "Reference architecture for GenAI delivery: RAG, evaluators, guardrails, rollout.",
    "scene08.role": "Role — R&D lead, architecture, MLOps.",
    "scene08.impact": "Impact — Faster AI releases with measurable quality.",
    "scene08.desc": "Playbooks and reference architectures to ship AI features safely: RAG pipelines, evaluators, guardrails, rollout strategies and MLOps foundations across multiple products.",
    "scene08.tag.role": "R&D LEAD",
    "scene08.tag.year": "2026",
    "scene08.tag.cta": "READ MORE ->",
    "scene08.cta": "View case study →",

    // Scene09
    "scene09.block.title1": "COMPOSABLE",
    "scene09.block.title2": "SYSTEMS",
    "scene09.block.what": "Composable stack mixing low-code delivery and custom services.",
    "scene09.block.role": "Role — Architecture, governance, delivery.",
    "scene09.block.impact": "Impact — Faster rollout with guardrails and monitoring.",
    "scene09.block.desc": "Low-code delivery + custom services: orchestration layers, API bridges, governance and monitoring built for scale.",
    "scene09.block.tags": "API / GRAPHQL / POSTGRES",
    "scene09.block.cta": "View system →",
    "scene09.tile.title1": "AUTOMATION",
    "scene09.tile.title2": "STACK",
    "scene09.tile.what": "Automation stack for backoffice workflows with AI copilots.",
    "scene09.tile.role": "Role — Integration, custom hooks, rollout.",
    "scene09.tile.impact": "Impact — Reduced manual ops and clearer SLA.",
    "scene09.tile.desc": "Backoffice automation with OutSystems + custom hooks to legacy services and AI copilots for operations.",
    "scene09.tile.year": "2025",
    "scene09.tile.cta": "Open project →",

    // Projects
    "projects.photobooth.title1": "PHOTO",
    "projects.photobooth.title2": "BOOTH",
    "projects.photobooth.what": "Event platform with frontend upload flow, shared gallery and MEGA-backed media storage.",
    "projects.photobooth.role": "Role — Full-stack architecture, frontend UX, backend integration.",
    "projects.photobooth.impact": "Impact — Faster photo collection during events and a single gallery for guests.",
    "projects.photobooth.desc": "Frontend for joining an event, uploading event photos and browsing the live gallery. Backend APIs manage upload flow and push media to a MEGA cloud drive used as the event asset store.",
    "projects.photobooth.tags": "REACT | NODE.JS | MEGA",
    "projects.photobooth.cta": "View project →",
    "projects.photobooth.reelRole": "Frontend + Backend - Event platform",

    // Scene11
    "scene11.title1": "BUILD WHAT",
    "scene11.title2": "PEOPLE USE",
    "scene11.body": "Pragmatic full stack developer: choose the right tech, keep architecture scalable, ship AI where it makes a real difference, and grow teams alongside the product.",
    "scene11.pill1": "Outcome — measurable impact over theatrics.",
    "scene11.pill2": "Ownership — from discovery to delivery.",
    "scene11.pill3": "Collaboration — clear rituals, docs, handover.",

    // Scene12
    "scene12.big": "AI",
    "scene12.sub": "Full stack delivery - Applied intelligence",
    "scene12.keywords": "RAG pipelines · Evaluators · Guardrails · Dashboards · Automation",
    "scene12.line": "I build AI inside real products: dashboards, workflow automation and agents.",

    // Scene14
    "scene14.about": "ABOUT",
    "scene14.bio": "Full stack + AI engineer crafting dashboards, digital products and AI systems for tech teams.",
    "scene14.special1": "AI products & internal tools",
    "scene14.special2": "Operational dashboards & data viz",
    "scene14.special3": "Architecture, APIs, automation",
    "scene14.stack": "Stack — Node, React/Next.js, TypeScript, Postgres, AWS, RAG/LLM pipelines",
    "scene14.stack.list": "React | Next.js | TypeScript | Node | Python | AI APIs | Postgres | Docker",
    "scene14.skill1": "Full Stack (Node, React, Next.js, TypeScript)",
    "scene14.skill2": "AI integration (RAG, evaluators, guardrails)",
    "scene14.skill3": "MLOps / data pipelines",
    "scene14.skill4": "Web architectures & APIs",
    "scene14.skill5": "Automation / low-code (OutSystems)",
    "scene14.skill6": "Team leadership & mentoring",

    // Scene15
    "scene15.headline": "Let’s talk about your product",
    "scene15.sub": "I work remote-first (CET) with teams and founders building AI-powered tools.",
    "scene15.cta.primary": "Start the conversation",
    "scene15.cta.secondary": "Book a slot",
    "scene15.form.nameLabel": "Name",
    "scene15.form.namePlaceholder": "Your name",
    "scene15.form.emailLabel": "Email",
    "scene15.form.emailPlaceholder": "name@email.com",
    "scene15.form.messageLabel": "Message",
    "scene15.form.messagePlaceholder": "Tell me about the project, timeline, goals",
    "scene15.form.profilesLabel": "Profiles",
    "scene15.location": "Based in Italy · Remote-friendly",
    "scene15.availability": "Availability — Part-time / project-based",
    "scene15.footer": "(c) 2026 Giandomenico D'Onofrio - All rights reserved",
  },
  it: {
    // Timeline labels
    "timeline.hero": "Intro",
    "timeline.what-i-build": "Full Stack + AI",
    "timeline.digital-systems": "Sistemi Digitali",
    "timeline.selected-work": "Lavori Selezionati",
    "timeline.portfolio-cases": "Casi Portfolio",
    "timeline.work-reel": "Lavori",
    "timeline.gen-ai-ops": "Gen AI Ops",
    "timeline.composable-systems": "Composable",
    "timeline.principles": "Principi",
    "timeline.ai-statement": "Statement AI",
    "timeline.about": "About",
    "timeline.contact": "Contatti",
    "footer.summary": "Ingegnere full stack e AI. Progetto dashboard, workflow AI e prodotti digitali che i team usano davvero.",
    "footer.contact": "Contatti",
    "footer.navigate": "Naviga",
    "footer.location": "Basato in Italia · Remote-first in CET",

    // Scene01
    "scene01.tagline": "Giandomenico D'Onofrio - Full Stack & AI",
    "scene01.heading1": "FULL STACK",
    "scene01.heading2": "+ AI",
    "scene01.hero": "Progetto e sviluppo dashboard, sistemi digitali e prodotti AI.",
    "scene01.cta.work": "Vedi i progetti",
    "scene01.cta.contact": "Parliamo",

    // Scene02 (what I build)
    "scene02.title": "COSA COSTRUISCO",
    "scene02.subtitle": "Design + engineering per prodotti usabili e in produzione.",
    "scene02.item1": "Dashboard operative",
    "scene02.item2": "Sistemi AI integrati",
    "scene02.item3": "Workflow automation",
    "scene02.item4": "Prodotti full-stack",

    // Scene03 services
    "scene03.heading1": "COSTRUISCO",
    "scene03.heading2": "SISTEMI",
    "scene03.heading3": "DIGITALI",
    "scene03.value.strategy.title": "Strategia",
    "scene03.value.strategy.desc": "Metto a fuoco il problema, scelgo le mosse giuste, elimino il rumore.",
    "scene03.value.build.title": "Build",
    "scene03.value.build.desc": "Frontend, backend e integrazioni AI consegnati end-to-end.",
    "scene03.value.delivery.title": "Delivery",
    "scene03.value.delivery.desc": "Produzione prima di tutto: performance, chiarezza, monitoraggio e handover.",
    "scene03.service.frontend.label": "FRONTEND",
    "scene03.service.frontend.desc": "Interfacce per dati complessi. React, Next.js, TypeScript, Tailwind, Framer Motion.",
    "scene03.service.backend.label": "BACKEND",
    "scene03.service.backend.desc": "API e servizi. Node.js, NestJS, Express, Prisma, PostgreSQL.",
    "scene03.service.cloud.label": "CLOUD",
    "scene03.service.cloud.desc": "Infrastruttura affidabile. AWS (Lambda, API Gateway, S3), Azure (Functions, App Service).",

    // Scene04
    "scene04.title1": "PROGETTI",
    "scene04.title2": "SELEZIONATI",
    "scene04.meta.range": "2021 - 2026",
    "scene04.meta.interactive": "INTERATTIVI",
    "scene04.meta.web": "WEB",

    // Scene05
    "scene05.card1.title1": "ASCLEPIUS",
    "scene05.card1.title2": "ECG AI",
    "scene05.card1.what": "Sistema AI per analisi ECG e monitoraggio clinico.",
    "scene05.card1.role": "Ruolo — Product design, frontend, integrazione AI.",
    "scene05.card1.impact": "Impatto — Triage più rapido e insight più chiari.",
    "scene05.card1.desc": "Classificatore ECG multiclasse con ensemble DL, ablation study e valutazioni ripetibili.",
    "scene05.card1.tags": "PYTORCH | MLOPS | 2025",
    "scene05.card1.cta": "Vedi il case →",
    "scene05.card2.title1": "ECG",
    "scene05.card2.title2": "DASHBOARD",
    "scene05.card2.what": "Dashboard operativa per workflow ECG realtime.",
    "scene05.card2.role": "Ruolo — Frontend, data viz, UX per clinici.",
    "scene05.card2.impact": "Impatto — Decisioni più rapide e visual più chiare.",
    "scene05.card2.desc": "Frontend per consultare output modello, qualita segnale e ablation con visual chiare.",
    "scene05.card2.tags": "NEXT.JS | 2025",
    "scene05.card2.cta": "Apri progetto →",
    "scene05.footer": "",

    // Scene06
    "scene06.title": "WORK",
    "scene06.meta.left1": "SISTEMI AI",
    "scene06.meta.left2": "AUTOMAZIONE",
    "scene06.meta.left3": "FRONTEND",
    "scene06.meta.right1": "PROGETTI AI + WEB",
    "scene06.meta.right2": "2021-OGGI",
    "scene06.meta.right3": "REMOTE-FIRST",
    "scene06.cap1": "Prodotti AI",
    "scene06.cap2": "Dashboard operative",
    "scene06.cap3": "Internal tools",
    "scene06.cap4": "Pipeline di automazione",
    "scene06.cap5": "Design engineering",
    "scene06.detail.label": "Scheda Progetto",
    "scene06.detail.roleLabel": "Ruolo",
    "scene06.detail.impactLabel": "Impatto",
    "scene06.detail.descLabel": "Dettagli",
    "scene06.detail.stackLabel": "Stack",
    "scene06.detail.close": "Chiudi",
    "scene06.p1.role": "R&D Lead - 2025",
    "scene06.p2.role": "Frontend - 2025",
    "scene06.p3.role": "Low-code + API - 2024",
    "scene06.p4.role": "Backend - 2023",

    // Scene07
    "scene07.row": "FULL STACK + AI",

    // Scene08
    "scene08.title1": "GEN",
    "scene08.title2": "AI OPS",
    "scene08.what": "Reference per delivery GenAI: RAG, evaluator, guardrail, rollout.",
    "scene08.role": "Ruolo — R&D lead, architettura, MLOps.",
    "scene08.impact": "Impatto — Rilascio AI più rapido con qualità misurabile.",
    "scene08.desc": "Playbook e reference per portare AI in produzione: pipeline RAG, evaluator, guardrail, rollout e basi MLOps multi-prodotto.",
    "scene08.tag.role": "R&D LEAD",
    "scene08.tag.year": "2026",
    "scene08.tag.cta": "SCOPRI DI PIU ->",
    "scene08.cta": "Vedi il case →",

    // Scene09
    "scene09.block.title1": "SISTEMI",
    "scene09.block.title2": "COMPOSABLE",
    "scene09.block.what": "Stack composable che unisce delivery low-code e servizi custom.",
    "scene09.block.role": "Ruolo — Architettura, governance, delivery.",
    "scene09.block.impact": "Impatto — Rollout più veloce con controlli e monitoring.",
    "scene09.block.desc": "Delivery low-code piu servizi custom: orchestrazione, API bridge, governance e monitoring per lo scale.",
    "scene09.block.tags": "API / GRAPHQL / POSTGRES",
    "scene09.block.cta": "Vedi il sistema →",
    "scene09.tile.title1": "AUTOMATION",
    "scene09.tile.title2": "STACK",
    "scene09.tile.what": "Stack di automazione per workflow backoffice con copiloti AI.",
    "scene09.tile.role": "Ruolo — Integrazione, hook custom, rollout.",
    "scene09.tile.impact": "Impatto — Meno operazioni manuali e SLA più chiari.",
    "scene09.tile.desc": "Automazione backoffice con OutSystems, integrazioni legacy e copiloti AI per le operation.",
    "scene09.tile.year": "2025",
    "scene09.tile.cta": "Apri progetto →",

    // Projects
    "projects.photobooth.title1": "PHOTO",
    "projects.photobooth.title2": "BOOTH",
    "projects.photobooth.what": "Piattaforma evento con frontend per upload e galleria condivisa, supportata da storage media su MEGA.",
    "projects.photobooth.role": "Ruolo — Architettura full-stack, UX frontend, integrazione backend.",
    "projects.photobooth.impact": "Impatto — Raccolta foto piu veloce durante gli eventi e una galleria unica per gli ospiti.",
    "projects.photobooth.desc": "Il frontend consente agli utenti di entrare in un evento, caricare le foto e vedere la galleria dell'evento. Il backend espone le API di supporto e carica i file su un drive cloud MEGA usato come archivio centralizzato.",
    "projects.photobooth.tags": "REACT | NODE.JS | MEGA",
    "projects.photobooth.cta": "Vedi progetto →",
    "projects.photobooth.reelRole": "Frontend + Backend - Piattaforma evento",

    // Scene11
    "scene11.title1": "COSTRUISCO CIO",
    "scene11.title2": "CHE SERVE",
    "scene11.body": "Approccio pragmatico: tecnologia giusta, architettura scalabile, AI dove serve, team che cresce insieme al prodotto.",
    "scene11.pill1": "Outcome — impatto misurabile prima dello showreel.",
    "scene11.pill2": "Ownership — dallo scoperta al rilascio.",
    "scene11.pill3": "Collaborazione — rituali chiari, documenti, handover.",

    // Scene12
    "scene12.big": "AI",
    "scene12.sub": "Full stack delivery - Intelligenza applicata",
    "scene12.keywords": "RAG pipelines · Evaluator · Guardrail · Dashboard · Automazione",
    "scene12.line": "Costruisco AI dentro prodotti reali: dashboard, workflow di automazione e agenti.",

    // Scene14
    "scene14.about": "ABOUT",
    "scene14.bio": "Ingegnere full stack + AI: sistemi chiari, veloci, mantenibili.",
    "scene14.special1": "Prodotti AI e internal tools",
    "scene14.special2": "Dashboard operative e data viz",
    "scene14.special3": "Architettura, API, automazione",
    "scene14.stack": "Stack — Node, React/Next.js, TypeScript, Postgres, AWS, pipeline RAG/LLM",
    "scene14.stack.list": "React | Next.js | TypeScript | Node | Python | AI APIs | Postgres | Docker",
    "scene14.skill1": "Full Stack (Node, React, Next.js, TypeScript)",
    "scene14.skill2": "Integrazione AI (RAG, evaluator, guardrail)",
    "scene14.skill3": "MLOps e pipeline dati",
    "scene14.skill4": "Architetture web e API",
    "scene14.skill5": "Automazione / low-code (OutSystems)",
    "scene14.skill6": "Leadership tecnica e mentoring",

    // Scene15
    "scene15.headline": "Parliamo del tuo prodotto",
    "scene15.sub": "Lavoro da remoto (CET) con team e founder che costruiscono strumenti AI.",
    "scene15.cta.primary": "Inizia la conversazione",
    "scene15.cta.secondary": "Prenota una call",
    "scene15.form.nameLabel": "Nome",
    "scene15.form.namePlaceholder": "Il tuo nome",
    "scene15.form.emailLabel": "Email",
    "scene15.form.emailPlaceholder": "nome@email.com",
    "scene15.form.messageLabel": "Messaggio",
    "scene15.form.messagePlaceholder": "Parlami del progetto, timeline, obiettivi",
    "scene15.form.profilesLabel": "Profili",
    "scene15.location": "Basato in Italia · Remote-friendly",
    "scene15.availability": "Disponibilità — Part-time / project-based",
    "scene15.footer": "(c) 2026 Giandomenico D'Onofrio - Tutti i diritti riservati",
  },
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => k });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("it");

  const value = useMemo(() => {
    const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;
    return { lang, setLang, t };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useI18n = () => useContext(LangContext);
