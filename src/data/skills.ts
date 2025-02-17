import { FaAws, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiRabbitmq,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiNestjs,
  SiExpress,
  SiElasticstack,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiTerraform,
  SiGraphql,
  SiApachekafka,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import { DiRedis } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const logosRight = [
  {
    id: "node",
    logo: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: "typescript",
    logo: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    id: "javascript",
    logo: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: "python",
    logo: SiPython,
    name: "Python",
    color: "#3776AB",
  },
  {
    id: "git",
    logo: FaGitAlt,
    name: "Git",
    color: "#F05033",
  },
  {
    id: "nestjs",
    logo: SiNestjs,
    name: "NestJS",
    color: "#E0234E",
  },
  {
    id: "express",
    logo: SiExpress,
    name: "Express",
    color: "#6b7280",
  },
  {
    id: "django",
    logo: SiDjango,
    name: "Django",
    color: "#156848",
  },
  {
    id: "react",
    logo: SiReact,
    name: "React",
    color: "#61DAFB",
  },
  {
    id: "reactNative",
    logo: TbBrandReactNative,
    name: "React Native",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    logo: SiNextdotjs,
    name: "Next.js",
    color: "#6b7280",
  },
  {
    id: "tailwindcss",
    logo: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    id: "graphql",
    logo: SiGraphql,
    name: "GraphQL",
    color: "#E10098",
  },
];

const logosLeft = [
  {
    id: "postgresql",
    logo: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
  },
  {
    id: "mongodb",
    logo: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    id: "rabbitmq",
    logo: SiRabbitmq,
    name: "RabbitMQ",
    color: "#F26722",
  },
  {
    id: "kafka",
    logo: SiApachekafka,
    name: "Kafka",
    color: "#D9D9D9",
  },
  {
    id: "redis",
    logo: DiRedis,
    name: "Redis",
    color: "#DC382D",
  },
  {
    id: "elk",
    logo: SiElasticstack,
    name: "ELK Stack",
    color: "#005571",
  },
  {
    id: "aws",
    logo: FaAws,
    name: "AWS",
    color: "#FF9900",
  },
  {
    id: "docker",
    logo: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
  {
    id: "kubernetes",
    logo: SiKubernetes,
    name: "Kubernetes",
    color: "#326CE5",
  },
  {
    id: "terraform",
    logo: SiTerraform,
    name: "Terraform",
    color: "#623CE4",
  },
  {
    id: "prometheus",
    logo: SiPrometheus,
    name: "Prometheus",
    color: "#E6522C",
  },
  {
    id: "grafana",
    logo: SiGrafana,
    name: "Grafana",
    color: "#F4F8FB",
  },
];

export { logosLeft, logosRight };
