import React from "react";
import {
  ProjectsContainer,
  ProjectItem,
  ProjectName,
  ProjectDescription,
  ProjectLink,
  SectionTitle,
  TagsContainer,
  Tag,
} from "../styles/Projects.styled";

const projects = [
  {
    name: "Bootup CLI",
    description: "CLI tool for quickly installing and configuring common server applications on Linux. Features an interactive TUI, supports databases, web servers, monitoring tools, message brokers, and an Iran mirror manager to fix network issues on Iran-hosted servers.",
    tech: ["Go", "CLI", "TUI", "Linux"],
    githubLink: "https://github.com/amirkh8006/bootup-cli",
  },
  {
    name: "Go gRPC Microservice: Product Service",
    description: "A simple microservice written in Go using gRPC. Exposes a GetProduct method to fetch product details by ID.",
    tech: ["Go", "gRPC", "Protobuf"],
    githubLink: "https://github.com/amirkh8006/go-microservice",
  },
  {
    name: "Simple TCP Chat Application in Go",
    description: "TCP-based chat application in Go with a server and client, enabling two-way communication over a raw TCP connection.",
    tech: ["Go", "TCP", "Networking"],
    githubLink: "https://github.com/amirkh8006/chat-applicatation",
  },
  {
    name: "Go Workout Tracking API",
    description: "REST API for tracking workouts built in Go.",
    tech: ["Go", "REST API"],
    githubLink: "https://github.com/amirkh8006/workout-tracking-api",
  },
  {
    name: "NestJS OTP Authentication Service",
    description: "Secure and scalable authentication microservice built with NestJS, supporting phone number verification via OTP. Fully Dockerized.",
    tech: ["NestJS", "TypeScript", "Docker", "MongoDB"],
    githubLink: "https://github.com/amirkh8006/authentication-task",
  },
  {
    name: "Redis-like In-Memory Database in Go",
    description: "Lightweight in-memory key-value store written in Go. Supports Set, Get, Persist, and Load operations.",
    tech: ["Go", "In-Memory DB"],
    githubLink: "https://github.com/amirkh8006/my-redis",
  },
];

const Projects: React.FC = () => (
  <ProjectsContainer data-testid="projects">
    <SectionTitle>My Projects</SectionTitle>
    {projects.map((project, index) => (
      <ProjectItem key={index}>
        <ProjectName>{project.name}</ProjectName>
        <TagsContainer>
          {project.tech.map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagsContainer>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </ProjectLink>
      </ProjectItem>
    ))}
  </ProjectsContainer>
);

export default Projects;
