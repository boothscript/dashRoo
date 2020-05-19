import React from 'react';
// import styled from 'styled-components';

import Header from './Header';
import PanelGrid from './PanelGrid';
import RatingsChart from './RatingsChart';

function Visualizer() {
  return (
    <PanelGrid row="3 / span 5" column="5 / span 3">
      <Header title="Visualizer" />
      <RatingsChart />
    </PanelGrid>
  );
}

export default Visualizer;
