import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Header } from "./components";
import { Error, Home, Login, Profile } from "./pages";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
