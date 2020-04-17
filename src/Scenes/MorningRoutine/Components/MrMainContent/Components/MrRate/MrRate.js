import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types"

import MrRater from './Components/MrRater/MrRater';

const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function MrRate({ style, dataKey }) {
  return (
    <Div style={style}>
      <MrRater text="Rate Yesterday" inputKey="day" dataKey={dataKey} />
      <MrRater text="Rate Sleep" inputKey="sleep" dataKey={dataKey} />
    </Div>
  );
}

MrRate.propTypes = {
  dataKey: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
}

export default MrRate;
