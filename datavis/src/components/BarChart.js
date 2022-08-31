/**
 * source URL === https://echarts.apache.org/en/index.html
 */
import ReactEcharts from "echarts-for-react";

/**
 * the wine data set csv file has been processed to a json file
 */ 
import data from "./datasets/actualDataset";

/**
 * BarChart: plot drawn between "Alcohol"
 * on the horizontal axis and "Malic Acid" on the vertical axis
 */
const BarChart = () => {
  const calculateAverage = (array) => {
    let total = 0;
    let count = 0;

    array.forEach((item) => {
      total += parseFloat(item);
      count++;
    });

    return total / count;
  };

  let malicAcidValuesForClass1 = data
    .filter((item) => {
      return item.class === 1;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  let malicAcidValuesForClass2 = data
    .filter((item) => {
      return item.class === 2;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  let malicAcidValuesForClass3 = data
    .filter((item) => {
      return item.class === 3;
    })
    .map((item) => {
      return [item.malicAcid];
    });

  const averageMalicAcidValuesForClass1 = calculateAverage(
    malicAcidValuesForClass1
  );
  const averageMalicAcidValuesForClass2 = calculateAverage(
    malicAcidValuesForClass2
  );
  const averageMalicAcidValuesForClass3 = calculateAverage(
    malicAcidValuesForClass3
  );

  /**
   * Chart Style. Used in options.
   */
  const style = {
    height: "400px",
    width: "100%",
  };

  /**
   * echarts {option}. used when passing to ReactEcharts
   * used bar with background instead of the standard one
   * source === 'https://echarts.apache.org/examples/en/editor.html?c=bar-background'
   */
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
