import React from 'react';
import { createDevTools } from '@redux-devtools/core';
import LogMonitor from '@redux-devtools/log-monitor';
import DockMonitor from '@redux-devtools/dock-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="right"
    defaultIsVisible
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>,
);

export default DevTools;
