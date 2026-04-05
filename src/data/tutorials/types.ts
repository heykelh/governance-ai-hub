export type TutorialSection = {
  title: {
    fr: string;
    en: string;
  };
  paragraphs: {
    fr: string[];
    en: string[];
  };
  bullets?: {
    fr: string[];
    en: string[];
  };
};

export type TutorialItem = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  duration: string;
  xp: number;
  excerpt: {
    fr: string;
    en: string;
  };
  objectives: {
    fr: string[];
    en: string[];
  };
  sections: TutorialSection[];
  deliverables: {
    fr: string[];
    en: string[];
  };
  quickTips: {
    fr: string[];
    en: string[];
  };
  recap: {
    fr: string[];
    en: string[];
  };
};