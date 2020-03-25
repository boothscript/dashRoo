import React from "react";
import styled from "styled-components";

const MrPanel = styled.div`
  background: ${props => props.theme.panel && props.theme.panel};
  border-radius: 16px;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
`;

const MrRateText = styled.h2`
  margin: 0;
  font-family: ${props => props.theme.font && props.theme.font};
  font-weight: 300;
  color: ${props => props.theme.white90 && props.theme.white90};
  align-self: center;
`;

const MrRateStars = styled.div`
  display: flex;
  justify-content: center;
`;

const MrRateStar = styled.div`
  background: url("/img/star-line.svg");
  width: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

console.log("test");

function MrRatePanel({ text }) {
  return (
    <MrPanel>
      <MrRateText>{text}</MrRateText>
      <MrRateStars>
        <MrRateStar></MrRateStar>
        <MrRateStar></MrRateStar>
        <MrRateStar></MrRateStar>
        <MrRateStar></MrRateStar>
        <MrRateStar></MrRateStar>
      </MrRateStars>
    </MrPanel>
  );
}

export default MrRatePanel;
