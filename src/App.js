

import { Cell, Grid } from 'baseui/layout-grid';
import React, { useEffect, useState, createRef } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Editor from "./components/editor/editor"
import { margin } from 'polished';
import Preview from './components/preview/preview';
import { PlaygroundProvider } from './provider/playground_provider';

const leftPaneRef = createRef();
const previewRef = createRef();

function App() {
  const [dragging, setDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState("35vw");

  const onMouseDown = (e) => {
    if (e.target.id = "divider") {
      setDragging(true);
    }
  };

  const onMouseMove = (e) => {
    if (dragging) {
      let width = e.screenX - (e.screenX - e.clientX);
      // leftPaneRef.current.style.width = width + "px";
      setLeftWidth(width < 260 ? 260 : width);
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };


  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseUp);
    // window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseUp);
      // window.removeEventListener('mousedown', onMouseDown);
    };
  });


  return (
    <div>
      <PlaygroundProvider>
        <Header />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
          <div ref={leftPaneRef} style={{ width: leftWidth }}>
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
            <Preview iframeRef={previewRef} />
          </div>
        </div>
      </PlaygroundProvider>
      <Footer />

    </div>
  );
}

export default App;
