import React, { useState } from "react";
import { AnimatedThumb } from "./AnimatedThumb";

export const StoryBook = props => {
  const { url, rows, dimension } = props;
  const [showStoryBook, setShowStoryBook] = useState(false);

  return (
    <div>
      {showStoryBook ? (
        <AnimatedThumb
          onMouseOut={() => setShowStoryBook(false)}
          url={url}
          rows={rows}
          dimension={dimension}
        />
      ) : (
        <div
          onMouseOver={() => setShowStoryBook(true)}
          style={{
            backgroundImage: `url("${url}")`,
            width: `${dimension.width}px`,
            height: `${dimension.height}px`
          }}
        />
      )}
    </div>
  );
};
