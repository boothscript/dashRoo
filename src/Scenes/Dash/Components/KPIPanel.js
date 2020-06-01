import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PanelGrid from './PanelGrid';
import Header from './KPIHeader';
import KPIChart from './KPIChart';

const PanelMenuButton = styled.button`
  background: ${(props) => props.theme.white10};
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  & > div {
    height: 18px;
    width: 18px;
    background: url('/img/cog.svg');
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const AddIcon = styled.div`
  height: 20px;
  width: 20px;

  background-position: center;
  background-repeat: no-repeat;
`;

const ChartWrapper = styled.div`
  grid-row: 4 / span 6;
  grid-column: 1 / span 6;
`;

const KPINumber = styled.p`
  color: ${(props) => props.theme.white90};
  font-family: ${(props) => props.theme.font};
  grid-row: 1 / span 3;
  grid-column: 7 / span 3;
  font-size: 3rem;
  line-height: 0.6;
  text-align: right;
`;

const DeltaP = styled.p`
  grid-row: 7 / span 2;
  grid-column: 7 / span 3;
  color: ${(props) => (props.positive ? '#9be564' : '#e26d5a')};
  font-family: ${(props) => props.theme.font};
  font-size: 1rem;
  text-align: right;
`;

function KPIDelta({ delta }) {
  return <DeltaP positive={delta > 0}>{delta}%</DeltaP>;
}

function KPIPanel({
  title,
  subtitle,
  chartLabelText,
  chartData,
  kpiValue,
  delta,
}) {
  const chartWrapperRef = useRef(null);

  const chartWrapperDimensions = {};

  useLayoutEffect(() => {
    chartWrapperDimensions.width = chartWrapperRef.current
      ? chartWrapperRef.current.offsetWidth
      : 0;
    chartWrapperDimensions.height = chartWrapperRef.current
      ? chartWrapperRef.current.offsetHeight
      : 0;
  }, [chartWrapperRef, chartWrapperDimensions]);

  return (
    <PanelGrid>
      <Header title={title}>
        <PanelMenuButton>
          <AddIcon />
        </PanelMenuButton>
      </Header>
      <ChartWrapper ref={chartWrapperRef}>
        <KPIChart
          xData={chartData.x}
          yData={chartData.y}
          xAxisLabel={chartLabelText}
          containerDimensions={chartWrapperDimensions}
        />
      </ChartWrapper>
      <KPINumber>{kpiValue}</KPINumber>
      <KPIDelta delta={delta} />
    </PanelGrid>
  );
}

export default KPIPanel;
