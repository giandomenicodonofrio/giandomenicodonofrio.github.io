import projectImg01 from "@/assets/project-01.jpg";
import projectImg02 from "@/assets/project-02.jpg";
import projectImg03 from "@/assets/project-03.jpg";
import projectImg04 from "@/assets/project-04.jpg";

export type ProjectId =
  | "asclepius-ecg-ai"
  | "ecg-dashboard"
  | "gen-ai-ops"
  | "automation-stack"
  | "composable-apis"
  | "photobooth";

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
    image: projectImg01,
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
    image: projectImg04,
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
};

export const portfolioCaseIds: ProjectId[] = ["asclepius-ecg-ai", "ecg-dashboard", "photobooth"];

export const workReelIds: ProjectId[] = [
  "asclepius-ecg-ai",
  "photobooth",
];

export const featuredProjectId: ProjectId = "gen-ai-ops";
