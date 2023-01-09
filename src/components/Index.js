import React, { useState } from "react";
import Header from "./Header/Header";
import TopBar from "./Dashbaord/TopBar";
import ChartRow from "./Dashbaord/ChartRow";

function Index() {
  const [dir, setDir] = useState("rtl-body");

  function setDirection() {
    if (dir == "rtl-body") setDir("ltr-body");
    else setDir("rtl-body");
  }

  return (
    <div
      className={`antialiased bg-gray-50 text-slate-500  min-h-screen ${dir}`}
    >
      <main className="xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Header changeDir={setDirection} />
        <div className="w-full px-6 py-6 mx-auto ">
          <TopBar />
        </div>
        <div className="w-full px-6 py-6 mx-auto ">
          <ChartRow />
        </div>
      </main>
    </div>
  );
}

export default Index;
