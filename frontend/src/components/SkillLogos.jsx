import {
  FileCode2,
  Paintbrush,
  Braces,
  FileType,
  Atom,
  IterationCcw,
  Palette,
  Server,
  Cable,
  Globe,
  Database,
  DatabaseZap,
  GitBranch,
  Github,
  MonitorSmartphone,
  Figma,
  Crown,
  Users,
  MessageCircle,
  CalendarCheck,
  Code,
} from "lucide-react";

const iconClass = "w-4 h-4";

const skillIcons = {
  "HTML": <FileCode2 className={iconClass} />,
  "CSS": <Paintbrush className={iconClass} />,
  "JavaScript": <Braces className={iconClass} />,
  "TypeScript": <FileType className={iconClass} />,
  "React.js": <Atom className={iconClass} />,
  "Next.js": <IterationCcw className={iconClass} />,
  "TailwindCSS": <Palette className={iconClass} />,
  "Node.js": <Server className={iconClass} />,
  "Express.js": <Cable className={iconClass} />,
  "REST APIs": <Globe className={iconClass} />,
  "MongoDB": <DatabaseZap className={iconClass} />,
  "MySQL": <Database className={iconClass} />,
  "Git": <GitBranch className={iconClass} />,
  "GitHub": <Github className={iconClass} />,
  "VS Code": <MonitorSmartphone className={iconClass} />,
  "Figma": <Figma className={iconClass} />,
  "Leadership": <Crown className={iconClass} />,
  "Team Collaboration": <Users className={iconClass} />,
  "Professional Communication": <MessageCircle className={iconClass} />,
  "Event Coordination": <CalendarCheck className={iconClass} />,
};

export function getSkillLogo(name) {
  return skillIcons[name] || <Code className={iconClass} />;
}
