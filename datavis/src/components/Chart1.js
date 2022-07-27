import ReactEcharts from "echarts-for-react";
import {actualDataset} from './datasets/actualDataset';

const Chart1 = () => {

  const getOption = () => {

    let colorIntensity = [];
    let hue = [];

    Object.entries(actualDataset).forEach(entry => {
      colorIntensity = [...colorIntensity, entry[10]];
      entry[11].forEach(e => {
        hue = [...new Set([...hue, e.name])];
      });
    });

    let options = colorIntensity.map(color => {
      let obj = {};
      obj.title = {
        text: `Something Somthing, ${color}`
      };
      obj.series = [
        {
           stack: "group",
           data: actualDataset[colorIntensity]
        },
        {
           stack: "group",
           data: actualDataset[hue]
        }
      ];
      return obj;
    });

    return {
      options: options
    };
  };

  return (
    <>
      <ReactEcharts
        option={getOption()}
        style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
        opts={{ renderer: "svg" }}
      />
    </>
  );
};

export default Chart1;