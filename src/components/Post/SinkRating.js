import React from "react"
import { TbBat } from "react-icons/tb";

const renderSinks = (rating) => {
  const batIcons = [];
  for (let i = 1; i <= rating; i++) {
    batIcons.push(
      <TbBat
        //className="sinkEmphasis"
        key={i}
        color="#FF2173"
        w={4}
        h={4}
      />
    );
  }
  return batIcons;
};

export default renderSinks