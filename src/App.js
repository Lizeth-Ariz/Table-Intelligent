import "./styles.css";
import Table from "./components/table";
import { FE_DATA } from "./components/data";

export default function App() {
  const data = FE_DATA?.data?.getGeneticElementsFromInterval;
  const dataTable = formatData(data);
  return (
    <article>
      <h1>Intelligent Table</h1>
      <Table dataTable={dataTable} />
    </article>
  );
}

function formatData(data) {
  let key = [];
  let formatTable = {
    columns: [],
    rows: []
  };
  for (const property in data[0]) {
    formatTable.columns.push({
      name: property,
      value: property
    });
    key.push(property);
  }

  data.map((ge, index) => {
    let row = [];
    for (const property in ge) {
      if (property === "objectRGBColor") {
        row.push({
          data: divColor(ge[property]),
          value: property
        });
      } else {
        row.push({
          data: ge[property],
          value: property
        });
      }
    }
    formatTable.rows.push(row);
    return null;
  });
  return formatTable;
}

const divColor = (rgbColor) => {
  return (
    <div style={{ height: "20px", backgroundColor: `rgb(${rgbColor})` }}></div>
  );
};
