import React, { useState } from "react";
import { expenses } from "../../data";
import {
  Char,
  Charts,
  Container,
  ContentItem,
  Days,
  Item,
  Numb,
  Numb2,
  TextHead,
  Title,
  Total,
  cabrio,
} from "./animation";

const Chart = () => {
  const [hovered, isHovered] = useState(false);
  return (
    <Container variants={cabrio} animate="visible">
      <TextHead variants={cabrio} animate="text">
        Pending - Last 7 days
      </TextHead>
      <Charts>
        {expenses.map((ex) => {
          return (
            <ContentItem>
              <Char
                height={ex.amount}
                animate={{
                  height: ["0%", `${ex.amount}%`],
                  transition: {
                    duration: 1.5,
                    delay: ex.delay,
                  },
                }}
              ></Char>
              <Days variants={cabrio} animate="text">
                {ex.day}
              </Days>
            </ContentItem>
          );
        })}
      </Charts>
      <Total>
        <Item>
          <Title variants={cabrio} animate="text">
            Total this month
          </Title>
          <Numb variants={cabrio} animate="text">
            $478.33
          </Numb>
        </Item>
        <Item>
          <Numb2 variants={cabrio} animate="text">
            +2.4%
          </Numb2>
          <Title variants={cabrio} animate="text">
            From last month
          </Title>
        </Item>
      </Total>
    </Container>
  );
};

export default Chart;
