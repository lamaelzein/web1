import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-3xl font-bold text-center">
        Login
      </h1>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />

      <Button variant="contained" fullWidth>
        Login
      </Button>

    </div>
  );
}