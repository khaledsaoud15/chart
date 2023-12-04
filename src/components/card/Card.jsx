import logo from "../../images/logo.svg";
import { Container, Content, Logo, Num, Par, cabrio } from "./animation";

const Card = () => {
  return (
    <Container variants={cabrio} animate="visible">
      <Content>
        <Par animate="text" variants={cabrio}>
          My balance
        </Par>
        <Num animate="text" variants={cabrio}>
          $921.48
        </Num>
      </Content>
      <Logo src={logo} animate="image" variants={cabrio} />
    </Container>
  );
};

export default Card;
