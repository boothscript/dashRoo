import React from 'react';

import ProgressBar from './ProgressBar';

export default {
  container: ProgressBar,
  title: 'ProgressBar',
  decorators: [(story) => <div style={{ padding: '3em' }}>{story()}</div>],
};

export const Empty = () => {
  return <ProgressBar valueColor="#8497e8" value={0} />;
};
export const Full = () => {
  return <ProgressBar valueColor="#8497e8" value={100} />;
};
export const Value = () => {
  return <ProgressBar valueColor="#8497e8" value={55} />;
};
export const ValueOver100 = () => {
  return <ProgressBar valueColor="#8497e8" value={240} />;
};
export const NegativeValue = () => {
  return <ProgressBar valueColor="#8497e8" value={-45} />;
};
