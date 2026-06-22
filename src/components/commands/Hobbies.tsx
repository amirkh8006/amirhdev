import {
  HobbyContainer,
  HobbyDesc,
  HobbiesIntro,
  HobbyTitle,
  HobbyLink,
} from "../styles/Hobbies.styled";

const Hobbies: React.FC = () => {
  return (
    <div data-testid="hobbies">
      <HobbiesIntro>
        Hobbies are the fuel for our passions, igniting<br />
        creativity and joy in our everyday lives.<br />
        Here are some of my hobbies 🚀
      </HobbiesIntro>
      {hobbies.map(({ title, desc, link }, index) => (
        <HobbyContainer key={index}>
          <HobbyTitle>{`${title}`}</HobbyTitle>
          <HobbyDesc>{desc}</HobbyDesc>
          <HobbyLink href={link} target="_blank"> {link} </HobbyLink>
        </HobbyContainer>
      ))}
    </div>
  );

};

const hobbies = [
  {
    title: "Calisthenics & Fitness 💪",
    desc: "Committed to staying fit through calisthenics and fitness training, building strength and maintaining a healthy lifestyle. Follow me on Instagram:",
    link: "https://www.instagram.com/amirkh8006/",
  },
  {
    title: "IoT & Side Projects 🔧",
    desc: "Love building IoT projects and working on innovative side projects that combine hardware and software solutions.",
  },
  {
    title: "Backend Engineering & Learning 💻",
    desc: "Passionate about backend engineering and constantly learning new technologies to build better systems and solutions.",
  },
];

export default Hobbies;
