import React, { Component, useState } from "react";
import { render } from "react-dom";

import { StoryBook } from "./StoryBook";
import "./style.css";

const App = () => {
  const storyBookConfig = {
    url:
      "https://github.com/mi-rsc/storybook-assets/blob/master/storybook.jpeg?raw=true",
    rows: 10,
    dimension: {
      width: 176,
      height: 100
    }
  };

  return (
    <>
      <StoryBook
        url={storyBookConfig.url}
        rows={storyBookConfig.rows}
        dimension={storyBookConfig.dimension}
      />
      <StoryBook
        url={storyBookConfig.url}
        rows={storyBookConfig.rows}
        dimension={storyBookConfig.dimension}
      />
      <StoryBook
        url={storyBookConfig.url}
        rows={storyBookConfig.rows}
        dimension={storyBookConfig.dimension}
      />
    </>
  );
};

render(<App />, document.getElementById("root"));
