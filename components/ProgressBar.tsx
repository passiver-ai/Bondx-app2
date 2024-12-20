'use client';

import * as React from 'react';

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar: React.FC = () => {
  return (
    <AppProgressBar
      height="4px"
      shallowRouting
      stopDelay={1000}
      color="#334155"
      options={{ showSpinner: false }}
    />
  );
};

export default ProgressBar;
