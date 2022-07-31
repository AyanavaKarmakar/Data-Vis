// source URL === https://echarts.apache.org/en/index.html
import ReactEcharts from "echarts-for-react";

// Bar chart to be drawn showing the “Alcohol” category
// on the horizontal axis and the average of “Malic Acid”
// for each class on the vertical axis
const BarChart = () => {
  // the wine data set csv file has been processed to a json file
  // importing the json file
  const data = require("./datasets/actualDataset");

  // function to calculate average
  const calculateAverage = (array) => {
    let total = 0;
    let count = 0;

    array.forEach((item) => {
      total += parseInt(item);
      count++;
    });

    return total / count;
  };

  // fetching malic acid data for class 1
  let malicAcidValuesForClass1 = [];
  malicAcidValuesForClass1 = data
    .filter((item) => {
      return item.class === 1;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  // fetching malic acid data for class 2
  let malicAcidValuesForClass2 = [];
  malicAcidValuesForClass2 = data
    .filter((item) => {
      return item.class === 2;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  // fetching malic acid data for class 3
  let malicAcidValuesForClass3 = [];
  malicAcidValuesForClass3 = data
    .filter((item) => {
      return item.class === 3;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  // finds average
  const averageMalicAcidValuesForClass1 = calculateAverage(
    malicAcidValuesForClass1
  );
  const averageMalicAcidValuesForClass2 = calculateAverage(
    malicAcidValuesForClass2
  );
  const averageMalicAcidValuesForClass3 = calculateAverage(
    malicAcidValuesForClass3
  );

  // Chart style. used in option
  const style = {
    height: "400px",
    width: "100%",
  };

  /*
    window.onresize = function () {
      style.height.resize();
    };
  */

  // echarts {option}. used when passing to ReactEcharts
  // used bar with background instead of the standard one
  // source === 'https://echarts.apache.org/examples/en/editor.html?c=bar-background'
  const option = {
    title: { text: "Alcohol v/s Malic Acid" },
    xAxis: {
      name: "Alcohol",
      type: "category",
      data: ["Class 1", "Class 2", "Class 3"],
    },
    yAxis: { name: "Malic Acid" },
    series: [
      {
        data: [
          averageMalicAcidValuesForClass1,
          averageMalicAcidValuesForClass2,
          averageMalicAcidValuesForClass3,
        ],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  return (
    <div className="container">
      <ReactEcharts option={option} style={style} />
    </div>
  );
};

export default BarChart;
