import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin: 1rem 0;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.primary};
  padding-bottom: 0.5rem;
`;

export const ProjectItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors?.text[200]};
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.colors?.primary}08`};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary};
    background-color: ${({ theme }) => `${theme.colors?.primary}15`};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => `${theme.colors?.primary}30`};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProjectName = styled.h3`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors?.text[100]};
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => `${theme.colors?.primary}18`};
  color: ${({ theme }) => theme.colors?.primary};
  border: 1px solid ${({ theme }) => `${theme.colors?.primary}45`};
  padding: 0.1rem 0.45rem;
  border-radius: 3px;
  font-size: 0.72rem;
  font-family: monospace;
  letter-spacing: 0.02em;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors?.primary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors?.primary};
    opacity: 0.8;
    transform: translateX(4px);
  }

  &:visited {
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
