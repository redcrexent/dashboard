import React from "react";
import Header from "./Header/Header";
import TopBar from "./Dashbaord/TopBar";

function Index() {
  return (
    <div className="antialiased bg-gray-50 text-slate-500  min-h-screen">
      <main className="xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Header />
        <div className="w-full px-6 py-6 mx-auto ">
          <TopBar />
        </div>
      </main>
    </div>
  );
}

export default Index;
