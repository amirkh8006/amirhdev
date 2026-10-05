import {
  ExperienceContainer,
  ExperienceItem,
  CompanyName,
  Position,
  DateRange,
  SectionTitle,
} from "../styles/Experience.styled";

const Publications: React.FC = () => (
  <ExperienceContainer data-testid="publications">
    <SectionTitle>Publications</SectionTitle>
    <ExperienceItem>
      <CompanyName>Node.js learning book</CompanyName>
      <Position>Author · Manian publications</Position>
      <DateRange>2020/06 - 2020/10</DateRange>
      <a
        href="https://ketab.ir/book/80428abd-84c3-4a90-99b4-6d8eacbc9ab5"
        target="_blank"
        rel="noopener noreferrer"
      >
        View book details
      </a>
    </ExperienceItem>
  </ExperienceContainer>
);

export default Publications;
