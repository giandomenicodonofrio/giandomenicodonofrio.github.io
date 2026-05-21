import { motion } from "framer-motion";
import { ReactNode } from "react";

export const EASE_POWER2 = [0.25, 0.46, 0.45, 0.94] as const;
export const EASE_POWER3 = [0.22, 0.61, 0.36, 1] as const;

const defaultViewport = { once: true, amount: 0.3 as const };

// Shared motion variants for consistency across scenes
export const variants = {
  heavyReveal: {
    hidden: { opacity: 0, y: 14, clipPath: "inset(0 0 100% 0)" },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.65, ease: EASE_POWER3 },
    },
  },
  blockReveal: {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: EASE_POWER2 },
    },
  },
  subtleText: {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 0.5,
      y: 0,
      transition: { duration: 0.4, ease: EASE_POWER2 },
    },
  },
  patternLine: {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 0.08,
      y: 0,
      transition: { duration: 0.35, ease: EASE_POWER2 },
    },
  },
};

export const makeStagger = (stagger = 0.08, delayChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

interface SceneBgProps {
  children?: ReactNode;
  className?: string;
  duration?: number;
  scale?: boolean;
}

export const SceneBg = ({ children, className = "", duration = 0.5, scale = false }: SceneBgProps) => (
  <motion.div
    className={`scene-bg ${className}`}
    initial={{ opacity: 0, scale: scale ? 1.02 : 1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={defaultViewport}
    transition={{ duration, ease: EASE_POWER2, delay: 0 }}
  >
    {children}
  </motion.div>
);

interface SceneMainProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scaleFrom?: number;
}

export const SceneMain = ({
  children,
  className = "",
  delay = 0.15,
  duration = 0.7,
  y = 24,
  x = 0,
  scaleFrom,
}: SceneMainProps) => (
  <motion.div
    className={`scene-main ${className}`}
    initial={{ opacity: 0, y, x, scale: scaleFrom ?? 1 }}
    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
    viewport={defaultViewport}
    transition={{ duration, ease: EASE_POWER3, delay }}
  >
    {children}
  </motion.div>
);

interface SceneDetailsProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export const SceneDetails = ({
  children,
  className = "",
  delay = 0.28,
  duration = 0.45,
  y = 12,
}: SceneDetailsProps) => (
  <motion.div
    className={`scene-details ${className}`}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={defaultViewport}
    transition={{ duration, ease: EASE_POWER2, delay }}
  >
    {children}
  </motion.div>
);
