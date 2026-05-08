import toast from "react-hot-toast";

export const successMessage = (msg: string) => {
  toast.success(msg);
};