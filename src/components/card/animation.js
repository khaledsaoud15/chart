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
  image: {
    opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 0;
  justify-content: space-between;
  padding: 0;
  background-color: #ec775f;
  color: #fff;
  height: 15vh;
  overflow: hidden;
`;
export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Par = styled(motion.p)`
  width: 100%;
  opacity: 0;
`;
export const Num = styled(motion.h1)`
  font-size: 30px;
  opacity: 0;
`;
export const Logo = styled(motion.img)`
  height: 50px;
  width: 50px;
`;
