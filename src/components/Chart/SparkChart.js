import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function SparkChart({ data, pcolor }) {
  const ref = useRef();

  let keydata = data;
  let color = pcolor;

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    const WIDTH = 205;
    const HEIGHT = 30;
    const MARGIN = { top: 5, right: 5, bottom: 5, left: 5 };
    const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
    const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
    const DATA_COUNT = 10;
    // let key =

    let key = keydata;

    let min = Math.min(...key);
    let max = Math.max(...key);
    const data = d3.range([DATA_COUNT]).map((d) => key[d]);
    const x = d3.scaleLinear().domain([0, DATA_COUNT]).range([0, INNER_WIDTH]);

    const y = d3.scaleLinear().domain([min, max]).range([INNER_HEIGHT, 1]);

    console.log(color);
    if (min != null) {
      svgElement
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .append("g")
        .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

      const line = d3
        .line()
        .x((d, i) => x(i))
        .y((d) => y(d));

      svgElement
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("d", line);

      svgElement
        .append("circle")
        .attr("r", 2)
        .attr("cx", x(0))
        .attr("cy", y(keydata[0]))
        .attr("fill", "steelblue");
      svgElement
        .append("circle")
        .attr("r", 2)
        .attr("cx", x(DATA_COUNT - 1))
        .attr("cy", y(keydata[DATA_COUNT - 1]))
        .attr("fill", "tomato");
    }
  }, [color, keydata, data]);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
}

export default SparkChart;
