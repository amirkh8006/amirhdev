import React from "react";
import {
  ExperienceContainer,
  ExperienceItem,
  CompanyName,
  Position,
  DateRange,
  Description,
  DescriptionList,
  SectionTitle,
  ExperienceTechnologies,
  TechLabel,
} from "../styles/Experience.styled";

import { Tag } from "../styles/Projects.styled";

type DescriptionItem = string | { text: string; href: string };

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  tech: string[];
  description: DescriptionItem[];
};

const experiences: Experience[] = [
  {
    company: "Khanetala",
    tech: [
      "Node.js",
      "NestJS",
      "Redis",
      "MongoDB",
      "Nexus",
      "GitLab",
      "Prometheus",
      "Grafana",
      "Docker",
      "Linux",
    ],
    position: "Backend Engineer",
    startDate: "2025/08",
    endDate: "Present",
    description: [
      "Led infrastructure and server-side operations, ensuring uptime, security, and reliability.",
      "Developed scalable microservices using NestJS and Node.js with fully Dockerized workflows.",
      "Managed GitLab Shell Runners and CI/CD pipelines for automated deployments.",
      "Deployed and tuned Prometheus and Grafana with custom dashboards and alerting.",
      "Enhanced system reliability using systemd service management.",
    ],
  },
  {
    company: "Galaxy Vision",
    tech: [
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "MinIO",
      "Redis",
      "NGINX",
    ],
    position: "Backend Developer",
    startDate: "2024/05",
    endDate: "2025/05",
    description: [
      "Developed and optimized the wallet system with a focus on reliable and secure transactions.",
      "Maintained and scaled backend services connected to multi-database MongoDB clusters.",
      "Refactored the legacy codebase into modular NestJS, improving performance and maintainability.",
      "Integrated Redis caching, improving response times across services.",
    ],
  },
  {
    company: "Jadeh",
    tech: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Message Brokers",
    ],
    position: "Backend Developer",
    startDate: "2020/10",
    endDate: "2024/04",
    description: [
      "Contributed to the wallet subsystem, ensuring secure and reliable transaction processing.",
      "Maintained the main backend application, ensuring stability, scalability, and resilience.",
      "Developed high-performance APIs using message brokers and distributed caching.",
    ],
  },
];

const Experience: React.FC = () => (
  <ExperienceContainer data-testid="experience">
    <SectionTitle>Professional Experience</SectionTitle>
    {experiences.map((exp, index) => (
      <ExperienceItem key={index}>
        <CompanyName>{exp.company}</CompanyName>
        <Position>{exp.position}</Position>
        <p>Tehran, Iran · On-site · Full-time</p>
        <DateRange>
          {exp.startDate} - {exp.endDate}
        </DateRange>
        <Description>
          <DescriptionList>
            {exp.description.map((item, idx) =>
              typeof item === "string" ? (
                <li key={idx}>{item}</li>
              ) : (
                <li key={idx}>
                  {item.text}{" "}
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.href}
                  </a>
                </li>
              )
            )}
          </DescriptionList>
        </Description>
        <ExperienceTechnologies aria-label="Technologies">
          <TechLabel>Tech:</TechLabel>
          {exp.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ExperienceTechnologies>
      </ExperienceItem>
    ))}
    <p>
      For my Node.js book, type <strong>publications</strong>.
    </p>
  </ExperienceContainer>
);

export default Experience;
