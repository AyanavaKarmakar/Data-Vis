// source URL === https://echarts.apache.org/en/index.html
import ReactEcharts from "echarts-for-react";

// Bar chart to be drawn showing the “Alcohol” category
// on the horizontal axis and the average of “Malic Acid”
// for each class on the vertical axis
const BarChart = () => {

  // the wine data set csv file has been processed to a json file
  // importing the json file
  const data = require("./datasets/actualDataset");

  // map the alcohol and malic acid parameters in an empty array
  // function to handle map operation
  const handleMapFunction = (item) => {
    return [item.alcohol, item.malicAcid];
  }

  // created an empty array. used in options to use as a data array
  let alcoholAndmalicAcid = [];
  alcoholAndmalicAcid = data.map(handleMapFunction);
  
  // Chart style. used in option
   const style = {
     height: "50vh",
     width: "100%"
  };

  // echarts {option}. used when passing to ReactEcharts
  // used bar with background instead of the standard one
  // source === 'https://echarts.apache.org/examples/en/editor.html?c=bar-background'
  const option = {
    title: { text: 'Alcohol v/s Average of Malic Acid' },
    xAxis: { name: 'Alcohol' },
    yAxis: { name: 'Average of Malic Acid' },
    series: [
      {
        data: alcoholAndmalicAcid,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
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