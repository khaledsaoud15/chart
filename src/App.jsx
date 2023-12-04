import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "./components/card/Card";
import Chart from "./components/expensses/Chart";

const App = () => {
  return (
    <ContainerDiv>
      <Card />
      <Chart />
    </ContainerDiv>
  );
};

export default App;

const ContainerDiv = styled(motion.div)`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  @media (max-width: 914px) {
    width: 50%;
    height: auto;
  }
  @media (max-width: 760px) {
    width: 80%;
    height: auto;
  }
`;
