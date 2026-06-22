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
} from "../styles/Experience.styled";

type DescriptionItem = string | { text: string; href: string };

type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: DescriptionItem[];
};

const experiences: Experience[] = [
  {
    company: "Khanetala Co.",
    position: "DevOps & Backend Engineer",
    startDate: "2025/09",
    endDate: "Present",
    description: [
      "Designed and deployed a GitLab CI/CD pipeline with Shell Runners, automating build and deployment workflows across the team.",
      "Managed application lifecycle using systemd, improving process reliability and service recovery in production.",
      "Set up Nexus Repository for centralized artifact management and integrated Trivy for automated vulnerability scanning in the pipeline.",
      "Built a full observability stack with Prometheus & Grafana, including custom dashboards, exporters, and alerting rules for real-time infrastructure monitoring.",
      "Deployed Mattermost as the team's internal communication and DevOps alerting hub, integrated with monitoring pipelines.",
      "Collaborated on scalable microservices architecture using NestJS and Node.js, writing Dockerfiles and Docker Compose configs for consistent, portable deployments.",
      "Configured MongoDB replication and automated secure database backups, ensuring high availability and data integrity.",
      "Hardened and configured Redis with isolated databases per service, optimizing performance and security boundaries.",
      "Self-hosted Vaultwarden for secure, team-wide password and secrets management.",
      "Deployed TriliumNext as a self-hosted knowledge base for internal documentation and team note-taking.",
    ],
  },
  {
    company: "Galaxy Vision Co.",
    position: "Back End Engineer",
    startDate: "2024/06",
    endDate: "2025/05",
    description: [
      "Developed and maintained backend systems using Node.js, Express, and NestJS for high-performance applications.",
      "Designed and optimized MongoDB schemas, implemented efficient queries, and integrated Docker + MinIO for scalable media handling.",
      "Configured deployments using PM2 and Git hooks to enable seamless deployment processes.",
      "Configured and managed NGINX as a reverse proxy, handling routing, SSL termination, and performance optimization.",
      "Deployed and configured Sentry for real-time error monitoring, improving debugging efficiency and issue response time.",
      "Implemented analytics tracking with self-hosted Matomo for real-time user behavior insights and utilized Redis for caching and performance improvements.",
      "Set up and maintained Uptime Kuma for real-time service and endpoint monitoring, ensuring high availability and quick incident response.",
    ],
  },
  {
    company: "Jadeh Logistic Co.",
    position: "Back End Developer",
    startDate: "2020/10",
    endDate: "2024/05",
    description: [
      "Developed and maintained back-end applications using Node.js, MongoDB, Parse Platform, Redis, and message brokers.",
      "Collaborated on the creation of a wallet app using NestJS, PostgreSQL, and Swagger for enhanced user experience.",
      "Designed and implemented an operational app to support the main app, utilizing Node.js, Express.js, and MongoDB.",
    ],
  },
  {
    company: "Daneshjooyar",
    position: "Instructor",
    startDate: "2020/06",
    endDate: "2020/10",
    description: [
      "Instructor of Node.js and RESTful API training course",
      { text: "Course Link:", href: "https://www.daneshjooyar.com/node-js-rest/" },
    ],
  },
  {
    company: "Manian publications",
    position: "Author",
    startDate: "2020/06",
    endDate: "2020/10",
    description: [
      "Author of the Node.js learning book",
      { text: "Book Link:", href: "https://ketab.ir/book/80428abd-84c3-4a90-99b4-6d8eacbc9ab5" },
    ],
  },
  {
    company: "FreeLance",
    position: "Developer",
    startDate: "2019/05",
    endDate: "2020/09",
    description: [
      "Independently completed multiple full-stack development projects for clients from various industries.",
    ],
  },
];

const Experience: React.FC = () => (
  <ExperienceContainer data-testid="experience">
    <SectionTitle>Professional Experiences</SectionTitle>
    {experiences.map((exp, index) => (
      <ExperienceItem key={index}>
        <CompanyName>{exp.company}</CompanyName>
        <Position>{exp.position}</Position>
        <DateRange>{exp.startDate} - {exp.endDate}</DateRange>
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
      </ExperienceItem>
    ))}
  </ExperienceContainer>
);

export default Experience;
