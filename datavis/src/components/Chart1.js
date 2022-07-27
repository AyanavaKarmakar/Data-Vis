import ReactEcharts from "echarts-for-react";
import {actualDataset} from './datasets/actualDataset';

const Chart1 = () => {

  const getOption = () => {
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