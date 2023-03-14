import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes";

export default function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
}
