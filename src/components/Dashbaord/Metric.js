import React from "react";
import BarChart from "../Chart/BarChart";
import {SparkChart} from "../Chart/SparkChart";


const data = [
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
  ]
  

function Metric() {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row">
            <div>
              <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                Today's Money
              </p>
              <h5 className="mb-0 font-bold">
                $53,000
                <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                  +55%
                </span>
              </h5>
            </div>
            <div className="px-3 text-right mx-auto"><SparkChart data={data} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metric;
