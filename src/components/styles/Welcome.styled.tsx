import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: clamp(1.4rem, 4vw, 2rem);
  margin: 0 0 0.5rem;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors?.text[100]};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  margin: 0 0 0.75rem;
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;
