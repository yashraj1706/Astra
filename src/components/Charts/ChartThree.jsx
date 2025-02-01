import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  // ...existing code...
};

const ChartThree = () => {
  const [state, setState] = useState({
    series: [65, 34, 12, 56],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      {/* ...existing code... */}
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
      {/* ...existing code... */}
    </div>
  );
};

export default ChartThree;
