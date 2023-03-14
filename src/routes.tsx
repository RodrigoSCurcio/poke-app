import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Error, Home, Login, Profile } from "./pages";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
