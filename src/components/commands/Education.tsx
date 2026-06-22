import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor's Degree in Web Programming",
    desc: "Iran University of Applied Informatics — Tehran, Iran | January 2023 - January 2026",
  },
  {
    title: "Associate Degree in Computer Programming",
    desc: "Iran University of Applied Informatics — Tehran, Iran | October 2019 - May 2022",
  },
];

export default Education;
