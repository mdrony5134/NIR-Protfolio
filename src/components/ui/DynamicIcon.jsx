"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaDownload,
  FaCheck,
  FaCopy,
  FaPaperPlane,
  FaChevronRight,
  FaSlidersH,
  FaNetworkWired,
  FaStripeS,
  FaPaypal,
  FaCreditCard,
  FaLock,
  FaBell,
  FaServer,
  FaGlobe,
  FaBolt,
  FaCode,
  FaTerminal,
  FaFigma,
  FaPaintBrush,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiZod,
  SiSocketdotio,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiAppwrite,
  SiNginx,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const ICON_MAP = {
  // Frontend
  SiNextdotjs: <SiNextdotjs />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaNetworkWired: <FaNetworkWired />,
  SiZod: <SiZod />,
  SiSocketdotio: <SiSocketdotio />,
  FaSlidersH: <FaSlidersH />,
  SiRedux: <SiRedux />,

  // Backend
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiMongoose: <SiMongoose />,
  SiFirebase: <SiFirebase />,
  SiAppwrite: <SiAppwrite />,

  // Payments & Comms
  FaStripeS: <FaStripeS />,
  FaPaypal: <FaPaypal />,
  FaCreditCard: <FaCreditCard />,
  FaEnvelope: <FaEnvelope />,
  FaLock: <FaLock />,
  FaBell: <FaBell />,

  // DevOps
  FaServer: <FaServer />,
  FaGlobe: <FaGlobe />,
  SiNginx: <SiNginx />,
  FaBolt: <FaBolt />,
  SiVercel: <SiVercel />,

  // Tools
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaCode: <FaCode />,
  SiPostman: <SiPostman />,
  FaTerminal: <FaTerminal />,
  FaFigma: <FaFigma />,
  FaPaintBrush: <FaPaintBrush />,

  // Common
  FaLinkedin: <FaLinkedin />,
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaExternalLinkAlt: <FaExternalLinkAlt />,
  FaPhoneAlt: <FaPhoneAlt />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaBriefcase: <FaBriefcase />,
  FaGraduationCap: <FaGraduationCap />,
  FaAward: <FaAward />,
  FaDownload: <FaDownload />,
  FaCheck: <FaCheck />,
  FaCopy: <FaCopy />,
  FaPaperPlane: <FaPaperPlane />,
  FaChevronRight: <FaChevronRight />,
  FaArrowRight: <FaArrowRight />,
  FaStar: <FaStar />,
};

export default function DynamicIcon({ name, className = "" }) {
  if (!name || !ICON_MAP[name]) {
    return <FaCode className={className} />;
  }

  const iconElement = ICON_MAP[name];
  return <span className={`inline-flex items-center ${className}`}>{iconElement}</span>;
}
