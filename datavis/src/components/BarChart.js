// source URL === https://echarts.apache.org/en/index.html
import ReactEcharts from "echarts-for-react";

// Bar chart to be drawn showing the “Alcohol” category
// on the horizontal axis and the average of “Malic Acid”
// for each class on the vertical axis
const BarChart = () => {

  // the wine data set csv file has been processed to a json file
  // importing the json file
  const data = require("./datasets/actualDataset");




  //Chart style. used in options
  const style = {
    height: "50vh",
    width: "100%"
  };

  // echarts {option}. used when passing to ReactEcharts
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return (
    <>
      <ReactEcharts option={option} style={style} />
    </>
  );
};

export default BarChart;