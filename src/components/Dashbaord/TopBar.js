import React from "react";
import Metric from "./Metric";

function TopBar() {
  return (
    <>
      <div className="flex flex-wrap mx-3">
        <Metric />
        <Metric />
        <Metric />
        <Metric />
      </div>
    </>
  );
}

export default TopBar;
