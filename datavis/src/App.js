import ScatterChart from "./components/ScatterChart";
import BarChart from "./components/BarChart";

// ScatterChart: plot drawn between "Color Intensity"
// on the horizontal axis and "Hue" on the vertical axis

// BarChart: plot drawn between "Alcohol"
// on the horizontal axis and "malic acid" on the vertical axis

function App() {
  return (
    <>
      <ScatterChart/>
      <BarChart />
    </>
  );
}

export default App;
