import { motion } from "framer-motion";
import styled from "styled-components";

export const cabrio = {
  hidden: {
    width: 0,
    borderRadius: 0,
  },
  visible: {
    width: ["0%", "100%", "98%", "100%"],
    borderRadius: "20px",
    padding: "15px",
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
  text: {
    opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
    transition: {
      delay: 1.6,
      duration: 1,
    },
  },
};

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 0;
  height: 60vh;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
`;
export const TextHead = styled(motion.h1)`
  margin: 15px 0;
  font-size: 25px;
`;
export const Charts = styled(motion.div)`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  justify-content: flex-start;
`;
export const ContentItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  gap: 5px;
  position: relative;
`;
export const Char = styled(motion.div)`
  width: 30px;
  margin-top: auto;
  height: 0;
  /* height: ${(props) => props.height}%; */
  background-color: ${(props) =>
    props.height > 50 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};
  border-radius: 4px;
`;

export const Days = styled(motion.p)``;
export const Total = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid hsl(28, 10%, 53%);
  padding: 10px 0;
`;
export const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const Title = styled(motion.p)`
  color: hsl(28, 10%, 53%);
  font-size: 14px;
`;
export const Numb = styled(motion.h1)`
  font-size: 35px;
  color: hsl(25, 47%, 15%);
`;
export const Numb2 = styled(motion.h1)`
  font-size: 16px;
  text-align: right;
  color: hsl(25, 47%, 15%);
`;
