import React, { useRef, useState } from 'react';

import { ScalePanel, ScaleItem } from '../src/Scale';

const ScaleTest = () => {
  const [layouts, onLayoutsChange] = useState(null);

  const ref1 = useRef(null);

  // console.log(ref1.current?.offsetHeight, '-----');
  return (
    <div
      style={{
        height: '200px',
        margin: '100px 0 0 100px',
        width: '500px',
        border: '1px solid #eeeeee',
        background: '#f1f1f1',
        position: 'relative',
      }}
    >
      <ScalePanel
        direction="vertical"
        enableOverflow
        // realTimeRender
        layouts={layouts}
        onLayoutsChange={(newLayouts, panelOffset) => {
          onLayoutsChange(newLayouts);
        }}
        defaultLayouts={{ 0: { flex: 1 }, 1: { height: 30 } }}
      >
        <ScaleItem enableScale={false}>11111</ScaleItem>
        <ScaleItem minHeight={80} barLocation="start">
          222
        </ScaleItem>
      </ScalePanel>
    </div>
  );
};

export default ScaleTest;
