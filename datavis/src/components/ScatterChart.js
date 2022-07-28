// source URL === https://echarts.apache.org/en/index.html
import ReactEcharts from "echarts-for-react";

// scatter plot to be drawn between “Color Intensity”
// on the horizontal axis and “Hue” on the vertical axis.
const ScatterChart = () => {

  // the wine data set csv file has been processed to a json file
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
    title: { text: 'Scatter Chart for Color Intensity v/s Hue' },
    xAxis: { name: 'Color Intensity' },
    yAxis: { name: 'Hue' },
    series: [
      {
        symbolSize: 15,
        data: hueDataAndColorIntensity,
        type: 'scatter'
      }
    ]
  }

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default ScatterChart;