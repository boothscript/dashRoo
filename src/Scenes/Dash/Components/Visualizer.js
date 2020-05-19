import React, { useRef } from 'react';
import styled from 'styled-components';

import Header from './Header';
import PanelGrid from './PanelGrid';

function Chart() {}

function Visualizer()

  return (
    <PanelGrid row="3 / span 5" column="5 / span 3">
      <Header title="Visualizer" />
      <Chart />
    </PanelGrid>
  );
}

export default Visualizer;
