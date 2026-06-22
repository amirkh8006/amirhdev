import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
  SpaceBetween,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <SpaceBetween>
        Hi, my name is <HighlightSpan>AmirHossein Khojasteh</HighlightSpan>!
      </SpaceBetween>
      <SpaceBetween>
        I'm a <HighlightAlt>Back-End Engineer | DevOps Enthusiast</HighlightAlt>
      </SpaceBetween>
      <SpaceBetween>
        Experienced Back-End Engineer with 6 years of experience in building efficient, secure, and scalable server-side applications. <br />
        Passionate about backend engineering, system design, and DevOps automation to deliver reliable and high-performance services.
      </SpaceBetween>
    </AboutWrapper>
  );
};

export default About;
