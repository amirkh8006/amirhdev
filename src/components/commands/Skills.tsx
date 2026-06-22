import {
  SkillsWrapper,
  SectionTitle,
  SkillCategory,
  SkillCategoryTitle,
  SkillsList,
  SkillItem,
  HighlightSpan,
} from "../styles/Skills.styled";

const Skills: React.FC = () => {
  return (
    <SkillsWrapper data-testid="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      
      {/* Programming Languages */}
      <SkillCategory>
        <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>JavaScript (ES6+) / TypeScript</SkillItem>
          <SkillItem>Go (Golang)</SkillItem>
          <SkillItem>Bash / Shell Scripting</SkillItem>
        </SkillsList>
      </SkillCategory>

      {/* Backend Development */}
      <SkillCategory>
        <SkillCategoryTitle>Backend Development</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>Node.js (Express.js, NestJS)</SkillItem>
          <SkillItem>Go (Golang) (Fiber, Gin)</SkillItem>
          <SkillItem>Microservices Architecture</SkillItem>
          <SkillItem>RESTful APIs & GraphQL</SkillItem>
          <SkillItem>gRPC & Protobuf</SkillItem>
          <SkillItem>Swagger / OpenAPI</SkillItem>
          <SkillItem>WebSockets & Real-Time Systems</SkillItem>
          <SkillItem>Authentication (JWT, OTP, Redis)</SkillItem>
          <SkillItem>File Storage (MinIO, S3)</SkillItem>
        </SkillsList>
      </SkillCategory>

      {/* Databases & Caching */}
      <SkillCategory>
        <SkillCategoryTitle>Databases & Caching</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>MongoDB (Replica Set, Backup, Optimization)</SkillItem>
          <SkillItem>PostgreSQL & MySQL</SkillItem>
          <SkillItem>Redis (Session, Caching, Pub/Sub)</SkillItem>
          <SkillItem>Kafka & BullMQ (Message Broker)</SkillItem>
          <SkillItem>Database Design & Indexing</SkillItem>
        </SkillsList>
      </SkillCategory>

      {/* DevOps & Infrastructure */}
      <SkillCategory>
        <SkillCategoryTitle>DevOps & Infrastructure</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>Docker & Docker Compose</SkillItem>
          <SkillItem>GitLab CI/CD with Zero Downtime Deployment</SkillItem>
          <SkillItem>Nginx & Caddy (Reverse Proxy, Load Balancing, SSL)</SkillItem>
          <SkillItem>Prometheus, Grafana & Alertmanager (Monitoring)</SkillItem>
          <SkillItem>Trivy (Vulnerability Scanning)</SkillItem>
          <SkillItem>Nexus Repository Management</SkillItem>
          <SkillItem>Linux Server Administration & UFW Configuration</SkillItem>
          <SkillItem>systemd (Service & Process Management)</SkillItem>
          <SkillItem>PM2 (Node.js Process Manager)</SkillItem>
          <SkillItem>Uptime Kuma (Service Monitoring)</SkillItem>
        </SkillsList>
      </SkillCategory>

      {/* Cloud & Virtualization */}
      <SkillCategory>
        <SkillCategoryTitle>Cloud & Virtualization</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>Self-Hosted Solutions (GitLab, Sentry, Mattermost, Vaultwarden, Matomo, Uptime Kuma, TriliumNext, Cadvisor)</SkillItem>
          <SkillItem>Infrastructure Automation & Backup Scripts</SkillItem>
        </SkillsList>
      </SkillCategory>

      {/* Frontend & Visualization */}
      <SkillCategory>
        <SkillCategoryTitle>Frontend</SkillCategoryTitle>
        <SkillsList>
          <SkillItem>Angular</SkillItem>
        </SkillsList>
      </SkillCategory>
    </SkillsWrapper>
  );
};

export default Skills;
