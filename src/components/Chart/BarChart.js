import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function BarChart() {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    svgElement.select("g").selectAll("*").remove();
    const width = 350;
    const height = 200;

    let keydata = [];
    keydata.push({ year: 2010, price: 50.0 });
    keydata.push({ year: 2011, price: 60.1 });
    keydata.push({ year: 2012, price: 70.2 });
    keydata.push({ year: 2013, price: 20.3 });
    keydata.push({ year: 2014, price: 30.4 });

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
      yScale = d3.scaleLinear().range([height, 0]);

    xScale.domain(
      keydata.map(function (d) {
        return d.year;
      })
    );

    yScale.domain([
      0,
      d3.max(keydata, function (d) {
        return d.price;
      }),
    ]);
    let g = svgElement
      .attr("width", width + 50)
      .attr("height", height + 70)
      .append("g")
      .attr("transform", "translate(" + 30 + "," + 5 + ")");

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return d;
          })
          .ticks(10)
      )
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("transform", "translate(10,0)")
      .attr("text-anchor", "start")
      .text("value");

    g.selectAll(".bar")
      .data(keydata)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("fill", "steelblue")
      .attr("x", function (d) {
        return xScale(d.year);
      })
      .attr("y", function (d) {
        return yScale(d.price);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        return height - yScale(d.price);
      });

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("y", 40)
      .attr("x", width - width / 2)
      .attr("font-size", "14px")
      .attr("text-anchor", "start")
      .attr("stroke", "gray")
      .attr("fill", "gray")
      .text("Year");
  }, []);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
}

export default BarChart;
