import projectImg01 from "@/assets/project-01.jpg";
import projectImg02 from "@/assets/project-02.jpg";
import projectImg03 from "@/assets/project-03.jpg";
import projectImg04 from "@/assets/project-04.jpg";
import projectAsclepiusImg from "@/assets/project-asclepius.jpg";
import projectNerImg from "@/assets/project-ner.jpg";
import projectPhotoboothImg from "@/assets/project-photobooth.jpg";
import projectRilImg from "@/assets/project-ril.jpg";

export type ProjectId =
  | "asclepius-ecg-ai"
  | "ecg-dashboard"
  | "gen-ai-ops"
  | "automation-stack"
  | "composable-apis"
  | "photobooth"
  | "ril"
  | "ner";

type ProjectText = {
  titleKeys: string[];
  whatKey?: string;
  roleKey?: string;
  impactKey?: string;
  descKey?: string;
  tagsKey?: string;
  ctaKey?: string;
  yearKey?: string;
};

export type ProjectDefinition = {
  id: ProjectId;
  image: string;
  href: string;
  titleKeys: string[];
  portfolio?: ProjectText;
  reel?: {
    roleKey: string;
    href: string;
  };
  feature?: ProjectText & {
    metaRoleKey?: string;
  };
};

export const projectCatalog: Record<ProjectId, ProjectDefinition> = {  
  "asclepius-ecg-ai": {
    id: "asclepius-ecg-ai",
    image: projectAsclepiusImg,
    href: "#gen-ai-ops",
    titleKeys: ["scene05.card1.title1", "scene05.card1.title2"],
    portfolio: {
      titleKeys: ["scene05.card1.title1", "scene05.card1.title2"],
      whatKey: "scene05.card1.what",
      roleKey: "scene05.card1.role",
      impactKey: "scene05.card1.impact",
      descKey: "scene05.card1.desc",
      tagsKey: "scene05.card1.tags",
      ctaKey: "scene05.card1.cta",
    },
    reel: {
      roleKey: "scene06.p1.role",
      href: "#portfolio-cases",
    },
  },
  "ecg-dashboard": {
    id: "ecg-dashboard",
    image: projectImg02,
    href: "#portfolio-cases",
    titleKeys: ["scene05.card2.title1", "scene05.card2.title2"],
    portfolio: {
      titleKeys: ["scene05.card2.title1", "scene05.card2.title2"],
      whatKey: "scene05.card2.what",
      roleKey: "scene05.card2.role",
      impactKey: "scene05.card2.impact",
      descKey: "scene05.card2.desc",
      tagsKey: "scene05.card2.tags",
      ctaKey: "scene05.card2.cta",
    },
    reel: {
      roleKey: "scene06.p2.role",
      href: "#portfolio-cases",
    },
  },
  "gen-ai-ops": {
    id: "gen-ai-ops",
    image: projectImg03,
    href: "#work-reel",
    titleKeys: ["scene08.title1", "scene08.title2"],
    feature: {
      titleKeys: ["scene08.title1", "scene08.title2"],
      whatKey: "scene08.what",
      roleKey: "scene08.role",
      impactKey: "scene08.impact",
      descKey: "scene08.desc",
      ctaKey: "scene08.cta",
      yearKey: "scene08.tag.year",
      metaRoleKey: "scene08.tag.role",
    },
  },
  "automation-stack": {
    id: "automation-stack",
    image: projectImg04,
    href: "#work-reel",
    titleKeys: ["scene09.tile.title1", "scene09.tile.title2"],
    reel: {
      roleKey: "scene06.p3.role",
      href: "#portfolio-cases",
    },
  },
  "composable-apis": {
    id: "composable-apis",
    image: projectImg02,
    href: "#work-reel",
    titleKeys: ["scene09.block.title1", "scene09.block.title2"],
    reel: {
      roleKey: "scene06.p4.role",
      href: "#portfolio-cases",
    },
  },
  photobooth: {
    id: "photobooth",
    image: projectPhotoboothImg,
    href: "#portfolio-cases",
    titleKeys: ["projects.photobooth.title1", "projects.photobooth.title2"],
    portfolio: {
      titleKeys: ["projects.photobooth.title1", "projects.photobooth.title2"],
      whatKey: "projects.photobooth.what",
      roleKey: "projects.photobooth.role",
      impactKey: "projects.photobooth.impact",
      descKey: "projects.photobooth.desc",
      tagsKey: "projects.photobooth.tags",
      ctaKey: "projects.photobooth.cta",
    },
    reel: {
      roleKey: "projects.photobooth.reelRole",
      href: "#portfolio-cases",
    },
  },
  ril: {
    id: "ril",
    image: projectRilImg,
    href: "https://github.com/giandomenicodonofrio/RIL",
    titleKeys: ["projects.ril.title1", "projects.ril.title2"],
    portfolio: {
      titleKeys: ["projects.ril.title1", "projects.ril.title2"],
      whatKey: "projects.ril.what",
      roleKey: "projects.ril.role",
      impactKey: "projects.ril.impact",
      descKey: "projects.ril.desc",
      tagsKey: "projects.ril.tags",
      ctaKey: "projects.ril.cta",
    },
    reel: {
      roleKey: "projects.ril.reelRole",
      href: "https://github.com/giandomenicodonofrio/RIL",
    },
  },
  ner: {
    id: "ner",
    image: projectNerImg,
    href: "https://github.com/giandomenicodonofrio/NER",
    titleKeys: ["projects.ner.title1", "projects.ner.title2"],
    portfolio: {
      titleKeys: ["projects.ner.title1", "projects.ner.title2"],
      whatKey: "projects.ner.what",
      roleKey: "projects.ner.role",
      impactKey: "projects.ner.impact",
      descKey: "projects.ner.desc",
      tagsKey: "projects.ner.tags",
      ctaKey: "projects.ner.cta",
    },
    reel: {
      roleKey: "projects.ner.reelRole",
      href: "https://github.com/giandomenicodonofrio/NER",
    },
  },
};

export const portfolioCaseIds: ProjectId[] = ["asclepius-ecg-ai", "ecg-dashboard", "photobooth", "ril", "ner"];

export const workReelIds: ProjectId[] = [
  "asclepius-ecg-ai",
  "photobooth",
  "ril",
  "ner",
];

export const featuredProjectId: ProjectId = "gen-ai-ops";
