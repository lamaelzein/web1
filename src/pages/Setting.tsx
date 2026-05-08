import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { ColDef, CellValueChangedEvent } from "ag-grid-community";

type ColorRow = {
  name: string;
  color: string;
};

function Settings() {
  const [rowData, setRowData] = useState<ColorRow[]>([
    { name: "Background", color: "#ffffff" },
    { name: "Text", color: "#000000" },
    { name: "Primary", color: "#1976d2" },
  ]);

  const columnDefs: ColDef<ColorRow>[] = [
    { field: "name", flex: 1 },
    { field: "color", flex: 1, editable: true },
  ];

  const onCellValueChanged = (params: CellValueChangedEvent<ColorRow>) => {
    setRowData(params.api.getRenderedNodes().map((n) => n.data as ColorRow));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Settings - Color Table
      </h1>

      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact<ColorRow>
          rowData={rowData}
          columnDefs={columnDefs}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
    </div>
  );
}

export default Settings;