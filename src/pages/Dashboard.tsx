import { Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import toast from "react-hot-toast";

function Dashboard() {

  const showSuccess = () => {
    toast.success("Success button clicked!");
  };

  const showWarning = () => {
    toast("Warning button clicked!", {
      icon: "⚠️",
    });
  };

  const showError = () => {
    toast.error("Error button clicked!");
  };

  const rowData = [
    { name: "Lama", age: 20 },
    { name: "Ali", age: 22 },
  ];

  const columnDefs = [
    { field: "name" as const },
    { field: "age" as const },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-5">
        Dashboard
      </h1>

      <div className="flex gap-4 mb-5">

        <Button
          variant="contained"
          color="success"
          onClick={showSuccess}
        >
          Success
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={showWarning}
        >
          Warning
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={showError}
        >
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
