import styled from "styled-components";

export const NeofetchContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 1rem 0;
`;

export const NeofetchLeft = styled.div`
  flex-shrink: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NeofetchAscii = styled.pre`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0;
`;

export const NeofetchRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NeofetchHeading = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  font-weight: bold;
  font-size: 1rem;
`;

export const NeofetchDivider = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  margin-bottom: 0.25rem;
`;

export const NeofetchRow = styled.div`
  display: flex;
  line-height: 1.75;
`;

export const NeofetchKey = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  font-weight: bold;
  min-width: 85px;
`;

export const NeofetchColon = styled.span`
  color: ${({ theme }) => theme.colors?.text[200]};
  margin: 0 0.35rem;
`;

export const NeofetchValue = styled.span`
  color: ${({ theme }) => theme.colors?.text[100]};

  &[href] {
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors?.text[100]};
    }

    &:visited {
      color: ${({ theme }) => theme.colors?.text[100]};
    }
  }
`;

export const NeofetchBlankRow = styled.div`
  height: 0.35rem;
`;

export const NeofetchColors = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.75rem;
`;

export const NeofetchColor = styled.div<{ bg: string }>`
  width: 18px;
  height: 18px;
  background-color: ${({ bg }) => bg};
  border-radius: 2px;
`;
