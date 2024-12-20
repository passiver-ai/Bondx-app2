'use client';

import React from 'react';

const Viewport = () => {
  React.useLayoutEffect(() => {
    void (async () => {
      const implementDocumentHeight = (await import('@/lib/viewport'))
        .implementDocumentHeight;

      implementDocumentHeight();
    })();
  }, []);
  return null;
};

export default Viewport;
