import React from "react";
import {
  NeofetchContainer,
  NeofetchLeft,
  NeofetchRight,
  NeofetchAscii,
  NeofetchHeading,
  NeofetchDivider,
  NeofetchRow,
  NeofetchKey,
  NeofetchColon,
  NeofetchValue,
  NeofetchBlankRow,
  NeofetchColors,
  NeofetchColor,
} from "../styles/Neofetch.styled";

const ascii = `        /\\
       /  \\
      / /\\ \\
     / /  \\ \\
    / /____\\ \\
   / /______\\ \\
  /_/          \\_\\
`;

type InfoRow = { key: string; value: string; href?: string } | null;

const info: InfoRow[] = [
  { key: "name", value: "AmirHossein Khojasteh" },
  { key: "role", value: "Back-End Engineer | DevOps" },
  null,
  { key: "os", value: "Arch Linux x86_64" },
  { key: "shell", value: "zsh" },
  { key: "uptime", value: "6 years" },
  null,
  { key: "github", value: "github.com/amirkh8006", href: "https://github.com/amirkh8006" },
];

const colors = [
  "#1D2A35",
  "#05CE91",
  "#FF9D00",
  "#cbd5e1",
  "#027474",
  "#00ff9c",
  "#E1E48B",
  "#80D932",
];

const Neofetch: React.FC = () => (
  <NeofetchContainer data-testid="neofetch">
    <NeofetchLeft>
      <NeofetchAscii>{ascii}</NeofetchAscii>
    </NeofetchLeft>
    <NeofetchRight>
      <NeofetchHeading>amirhossinkh7979@gmail.com</NeofetchHeading>
      <NeofetchDivider>{"─".repeat(28)}</NeofetchDivider>
      {info.map((item, i) =>
        item === null ? (
          <NeofetchBlankRow key={i} />
        ) : (
          <NeofetchRow key={i}>
            <NeofetchKey>{item.key}</NeofetchKey>
            <NeofetchColon>:</NeofetchColon>
            {item.href ? (
              <NeofetchValue as="a" href={item.href} target="_blank" rel="noopener noreferrer">
                {item.value}
              </NeofetchValue>
            ) : (
              <NeofetchValue>{item.value}</NeofetchValue>
            )}
          </NeofetchRow>
        )
      )}
      <NeofetchColors>
        {colors.map(c => (
          <NeofetchColor key={c} bg={c} />
        ))}
      </NeofetchColors>
    </NeofetchRight>
  </NeofetchContainer>
);

export default Neofetch;
