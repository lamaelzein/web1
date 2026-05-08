import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { type ColDef,  type CellValueChangedEvent } from "ag-grid-community";

type SettingRow = {
  setting: string;
  value: string;
};

function Settings() {

  const [rowData, setRowData] = useState<SettingRow[]>([
    { setting: "Background Color", value: "#ffffff" },
    { setting: "Text Color", value: "#000000" },
  ]);

  const columnDefs: ColDef<SettingRow>[] = [
    {
      field: "setting",
      editable: false,
    },
    {
      field: "value",
      editable: true,
    },
  ];

  const onCellValueChanged = (event: CellValueChangedEvent<SettingRow>) => {
    setRowData(event.api.getRenderedNodes().map((n) => n.data).filter(d => d !== undefined) as SettingRow[]);
  };

  const bgColor = rowData.find(r => r.setting === "Background Color")?.value;
  const textColor = rowData.find(r => r.setting === "Text Color")?.value;

  return (
    <div>

      <h1 className="text-3xl font-bold mb-5">
        Settings (Color Editor)
      </h1>

      {/* LIVE PREVIEW */}
      <div
        className="p-5 rounded mb-5"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        This is a live preview box 🎨
      </div>

      {/* AG GRID */}
      <div className="ag-theme-alpine" style={{ height: 300 }}>

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