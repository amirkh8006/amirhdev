import {
  Cmd,
  Container,
  PreName,
  Seperator,
  Name,
  Role,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <Container>
      <PreName>
        {`                               
:::'###::::'##::::'##:'####:'########::
::'## ##::: ###::'###:. ##:: ##.... ##:
:'##:. ##:: ####'####:: ##:: ##:::: ##:
:##:::. ##: ## ### ##:: ##:: ########::
:#########: ##. #: ##:: ##:: ##.. ##:::
:##.... ##: ##:.:: ##:: ##:: ##::. ##::
:##:::: ##: ##:::: ##:'####: ##:::. ##:
:..:::::..::..:::::..::....::..:::::..::                                        
        `}
      </PreName>
      <Name>AmirHossein Khojasteh</Name>
      <Role>Backend Engineer</Role>
      <Seperator>----</Seperator>
      <div>
        For a list of available commands, type `<Cmd>help</Cmd>`.
      </div>
    </Container>
  );
};

export default Welcome;
