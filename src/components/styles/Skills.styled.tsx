import styled from "styled-components";

export const SkillsWrapper = styled.div`
  margin: 1rem 0;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.primary};
  padding-bottom: 0.5rem;
`;

export const SkillCategory = styled.div`
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

export const SkillCategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

export const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors?.text[100]};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors?.primary};
    transition: color 0.2s ease-in-out;
  }
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;
