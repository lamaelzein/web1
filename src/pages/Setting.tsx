import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  type ColDef,
  type ICellRendererParams,
  type CellValueChangedEvent,
} from 'ag-grid-community';

interface ColorRow {
  id: number;
  name: string;
  color: string;
}

function Settings() {

  const [rowData, setRowData] = useState<ColorRow[]>([
    { id: 1, name: "Background", color: "#ffffff" },
    { id: 2, name: "Text", color: "#000000" },
    { id: 3, name: "Primary", color: "#1976d2" },
    { id: 4, name: "Warning", color: "#ff9800" },
    { id: 5, name: "Error", color: "#f44336" },
  ]);

  const columnDefs: ColDef<ColorRow>[] = [
    {
      field: "name",
      flex: 1,
    },
    {
      field: "color",
      editable: true,

      // show color preview
      cellRenderer: (params: ICellRendererParams<ColorRow>) => {
        return (
          <div className="flex items-center gap-2">
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: params.value,
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
            {params.value}
          </div>
        );
      },

      // color picker editor
      cellEditor: "agTextCellEditor",
    },
  ];

  const onCellValueChanged = (params: CellValueChangedEvent<ColorRow>) => {
    setRowData((prev) =>
      prev.map((row) =>
        row.id === params.data.id ? { ...params.data } : row
      )
    );
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-5">
        Settings - Color Table
      </h1>

      {/* PREVIEW BOX */}
      <div className="mb-5 p-5 rounded bg-gray-100">
        <p>Change colors in table below 🎨</p>
      </div>

      {/* AG GRID TABLE */}
      <div className="ag-theme-alpine" style={{ height: 400 }}>

        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          onCellValueChanged={onCellValueChanged}
        />

      </div>

    </div>
  );
}

export default Settings;