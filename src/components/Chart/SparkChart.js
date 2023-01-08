import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export const SparkChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, 100]);

    const axisGenerator = d3.axisBottom(xScale);
    svgElement.append("g").call(axisGenerator);
  }, []);

  return (
    <>
      <svg ref={ref} width="110" height="50"></svg>
    </>
  );
};
