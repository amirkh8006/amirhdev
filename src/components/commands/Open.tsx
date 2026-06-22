import React, { useContext, useEffect } from "react";
import { termContext } from "../Terminal";
import { getCurrentCmdArry, generateTabs } from "../../utils/funcs";
import { HelpWrapper, Cmd, CmdDesc, CmdList } from "../styles/Help.styled";
import { HobbiesIntro } from "../styles/Hobbies.styled";
import { UsageDiv } from "../styles/Output.styled";

export const openTargets = [
  { name: "github", label: "GitHub", url: "https://github.com/amirkh8006", tab: 4 },
  { name: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/amirkh8006", tab: 2 },
  { name: "telegram", label: "Telegram", url: "https://t.me/amirkh8006", tab: 2 },
  { name: "instagram", label: "Instagram", url: "https://www.instagram.com/amirkh8006", tab: 1 },
  { name: "resume", label: "Resume (PDF)", url: "/CV.pdf", tab: 4 },
  { name: "email", label: "Email", url: "mailto:amirhossinkh7979@gmail.com", tab: 5 },
];

const Open: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (rerender && currentCommand[0] === "open" && currentCommand.length === 2) {
      const target = openTargets.find(t => t.name === currentCommand[1]);
      if (target) window.open(target.url, "_blank");
    }
  }, [rerender, currentCommand]);

  if (arg.length === 0) {
    return (
      <HelpWrapper data-testid="open">
        <HobbiesIntro>Available targets — type: open &lt;target&gt;</HobbiesIntro>
        {openTargets.map(({ name, label, url, tab }) => (
          <CmdList key={name}>
            <Cmd>{name}</Cmd>
            {generateTabs(tab)}
            <CmdDesc>- {label}: {url}</CmdDesc>
          </CmdList>
        ))}
      </HelpWrapper>
    );
  }

  const found = openTargets.find(t => t.name === arg[0]);
  if (!found) {
    return (
      <UsageDiv>
        open: {arg[0]}: target not found
        <br />
        Usage: open &lt;target&gt; &nbsp; eg: open github
      </UsageDiv>
    );
  }

  return (
    <UsageDiv>
      Opening <Cmd>{found.url}</Cmd>...
    </UsageDiv>
  );
};

export default Open;
