

import { Cell, Grid } from 'baseui/layout-grid';
import React, { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Editor from "./components/editor/editor"
import { margin } from 'polished';
import Preview from './components/preview/preview';
import { PlaygroundProvider } from './provider/playground_provider';


function App() {
  const [dragging, setDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState("45vw");

  const onMouseDown = (e) => {
    if (e.target.id = "divider") {
      setDragging(true);
    }
  };

  const onMouseMove = (e) => {
    if (dragging) {
      let width = e.screenX - (e.screenX - e.clientX);
      setLeftWidth(width < 260 ? 260 : width);
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };


  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseUp);
    // document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseUp);
      // document.removeEventListener('mousedown', onMouseDown);
    };
  });

  return (
    <div>
      <PlaygroundProvider>
        <Header />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
          <div style={{ width: leftWidth }}>
            <Editor />
          </div>
          <div id="divider" style={{
            borderLeft: "8px solid #e8eaf6",
            borderRight: "8px solid #e8eaf6",
            width: "3px",
            background: dragging ? "#1769aa" : "#2196f3",
            cursor: "ew-resize",
            borderRadius: "1px",
          }} onMouseDown={onMouseDown} />
          <div style={{ flex: 1, width: "100%", position: "relative" }}>
            <Preview />
          </div>
        </div>
      </PlaygroundProvider>
      <Footer />

    </div>
  );
}

export default App;
