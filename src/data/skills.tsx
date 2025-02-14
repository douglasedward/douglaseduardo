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
    logo: SiNodedotjs,
    name: "Node.js",
    description:
      "JavaScript runtime for building scalable server-side applications.",
    color: "#339933",
  },
  {
    logo: SiTypescript,
    name: "TypeScript",
    description:
      "Strongly typed superset of JavaScript that compiles to plain JavaScript.",
    color: "#3178C6",
  },
  {
    logo: SiJavascript,
    name: "JavaScript",
    description: "Versatile programming language for web development.",
    color: "#F7DF1E",
  },
  {
    logo: SiPython,
    name: "Python",
    description:
      "Popular programming language known for simplicity and versatility.",
    color: "#3776AB",
  },
  {
    logo: FaGitAlt,
    name: "Git",
    description:
      "Distributed version control system for tracking code changes.",
    color: "#F05033",
  },
  {
    logo: SiNestjs,
    name: "NestJS",
    description:
      "Framework for building scalable and maintainable server-side applications.",
    color: "#E0234E",
  },
  {
    logo: SiExpress,
    name: "Express",
    description: "Minimalist web framework for Node.js.",
    color: "#6b7280",
  },
  {
    logo: SiDjango,
    name: "Django",
    description:
      "High-level Python web framework for building secure and maintainable websites.",
    color: "#156848",
  },
  {
    logo: SiReact,
    name: "React",
    description: "Library for building interactive user interfaces.",
    color: "#61DAFB",
  },
  {
    logo: TbBrandReactNative,
    name: "React Native",
    description:
      "Framework for building cross-platform mobile apps using React.",
    color: "#61DAFB",
  },
  {
    logo: SiNextdotjs,
    name: "Next.js",
    description:
      "React-based framework for server-side rendering and static site generation.",
    color: "#6b7280",
  },
  {
    logo: SiTailwindcss,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    color: "#06B6D4",
  },
  {
    logo: SiGraphql,
    name: "GraphQL",
    description:
      "Query language for APIs that enables clients to request only the data they need.",
    color: "#E10098",
  },
];

const logosLeft = [
  {
    logo: SiPostgresql,
    name: "PostgreSQL",
    description:
      "Advanced open-source relational database system with robust features.",
    color: "#336791",
  },
  {
    logo: SiMongodb,
    name: "MongoDB",
    description: "NoSQL database designed for flexibility and scalability.",
    color: "#47A248",
  },
  {
    logo: SiRabbitmq,
    name: "RabbitMQ",
    description:
      "Open-source message broker for reliable, scalable messaging between applications.",
    color: "#F26722",
  },
  {
    logo: SiApachekafka,
    name: "Kafka",
    description:
      "Distributed event streaming platform for building real-time data pipelines and streaming applications.",
    color: "#D9D9D9",
  },
  {
    logo: DiRedis,
    name: "Redis",
    description:
      "In-memory data store used for caching, messaging, and data structures.",
    color: "#DC382D",
  },
  {
    logo: SiElasticstack,
    name: "ELK Stack",
    description:
      "A set of tools for searching, analyzing, and visualizing log data in real-time. Includes Elasticsearch, Logstash, and Kibana.",
    color: "#005571",
  },
  {
    logo: FaAws,
    name: "AWS",
    description:
      "Comprehensive cloud platform offering computing, storage, and more.",
    color: "#FF9900",
  },
  {
    logo: FaDocker,
    name: "Docker",
    description:
      "Platform for containerizing applications and ensuring consistency across environments.",
    color: "#2496ED",
  },
  {
    logo: SiKubernetes,
    name: "Kubernetes",
    description:
      "System for automating deployment, scaling, and management of containerized applications.",
    color: "#326CE5",
  },
  {
    logo: SiTerraform,
    name: "Terraform",
    description:
      "Infrastructure-as-code tool for provisioning and managing cloud resources.",
    color: "#623CE4",
  },
  {
    logo: SiPrometheus,
    name: "Prometheus",
    description:
      "Open-source monitoring and alerting toolkit designed for reliability and scalability.",
    color: "#E6522C",
  },
  {
    logo: SiGrafana,
    name: "Grafana",
    description:
      "Open-source platform for monitoring and observability, allowing for real-time analytics and visualization.",
    color: "#F4F8FB",
  },
];

export { logosLeft, logosRight };
