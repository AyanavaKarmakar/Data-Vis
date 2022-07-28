import ReactEcharts from "echarts-for-react";

const ScatterChart = () => {

  // importing the json file
  const data = require("./datasets/actualDataset");

  // map the color intensity and hue parameters in an empty array
  // function to handle map operation
  const handleMapFunction = (item) => {
    return [item.colorIntensity, item.hue];
  }

  // created an empty array. used in options to use as a data array
  let hueDataAndColorIntensity = [];
  hueDataAndColorIntensity = data.map(handleMapFunction);

  //Chart style. used in options
  const style = {
    height: "50vh",
    width: "100%"
  };

  // echarts {option}. used when passing to ReactEcharts
  const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: hueDataAndColorIntensity,
        type: 'scatter'
      }
    ]
  }


  return (
    <>
      <center><b>Scatter Chart for Color Intensity v/s Hue</b></center>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default ScatterChart;