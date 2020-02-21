import React, { useEffect, useState } from "react";

const calculatePositions = (maxSprites, everyNTHSprite, spritesPerRow) => {
  const positions = [];

  for (let i = 0; i < maxSprites; i++) {
    if (i % everyNTHSprite === everyNTHSprite - 1) {
      const x = Math.floor(i % spritesPerRow);
      const y = Math.floor(i / spritesPerRow);

      positions.push({ x, y });
    }
  }

  return positions;
};

const useBackgroundPosition = (rows, dimension) => {
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  useEffect(() => {
    let tID;
    const everyNTHSprite = 2;
    const intervalSpeed = 60 * 3;
    const maxSprites = Math.pow(rows, 2);
    const positions = calculatePositions(maxSprites, everyNTHSprite, rows);

    console.log("start storybook animation...");
    let index = 0;
    tID = setInterval(() => {
      const pos = positions[index];
      const x = -pos.x * dimension.width;
      const y = -pos.y * dimension.height;
      setBackgroundPosition(`${x}px ${y}px`);

      index++;

      if (index >= positions.length) {
        index = 0;
      }
    }, intervalSpeed);

    return () => clearInterval(tID);
  }, [rows, dimension]);

  return backgroundPosition;
};

export const AnimatedThumb = props => {
  const { url, rows, dimension, onMouseOut } = props;
  const backgroundPosition = useBackgroundPosition(rows, dimension);

  return (
    <div
      onMouseOut={onMouseOut}
      style={{
        width: dimension.width,
        height: dimension.height,
        backgroundImage: `url("${url}")`,
        backgroundPosition
      }}
    />
  );
};
