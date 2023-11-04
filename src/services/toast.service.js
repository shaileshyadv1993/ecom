import { toast } from "react-toastify";

const config = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const successToast = (message) => {
  toast.success(message, config);
};

export const errorToast = (message) => {
  toast.error(message, config);
};
