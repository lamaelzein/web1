import { Button } from "@mui/material";

import { AgGridReact } from "ag-grid-react";
import  type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Dashboard() {

  const rowData = [
    { name: "Lama", age: 20 },
    { name: "Ali", age: 22 },
  ];

  const columnDefs: ColDef<{ name: string; age: number; }>[] = [
    { field: "name" },
    { field: "age" },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-5">
        Dashboard
      </h1>

      <div className="flex gap-4 mb-5">

        <Button variant="contained" color="success">
          Success
        </Button>

        <Button variant="contained" color="warning">
          Warning
        </Button>

        <Button variant="contained" color="error">
          Error
        </Button>

      </div>

      <div
        className="ag-theme-alpine"
        style={{ height: 300 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>

    </div>
  );
}

export default Dashboard;