// source URL === https://echarts.apache.org/en/index.html
import ReactEcharts from "echarts-for-react";
// import '../styles/styles.css';

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
  malicAcidValuesForClass1 = data.map((item) => {
    if (item.class === 1) {
      return [item.malicAcid];
    }
  });

  // fetching malic acid data for class 2
  let malicAcidValuesForClass2 = [];
  malicAcidValuesForClass2 = data.map((item) => {
    if (item.class === 2) {
      return [item.malicAcid];
    }
  });

  // fetching malic acid data for class 3
  let malicAcidValuesForClass3 = [];
  malicAcidValuesForClass3 = data.map((item) => {
    if (item.class === 3) {
      return [item.malicAcid];
    }
  });

  // cleans up undefined values
  // class 1 ends at 58th index === 59th position
  // total number of values === 178
  // splice(start, deleteCount)
  // ref === https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  malicAcidValuesForClass1.splice(59, 178);

  malicAcidValuesForClass2.splice(0, 59);
  malicAcidValuesForClass2.splice(71, 119);

  malicAcidValuesForClass3.splice(0, 130);

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

  
  window.onresize = function() {
    style.height.resize();
  };

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
