import MyAppointments from "./views/MyAppointments";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import AddAppointment from "./components/AddAppointment";

function App() {
  const location = useLocation(); // Obtiene la ruta actual

  const hideNavBarRoutes = ["/", "/register"];

  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);
  const shouldShowFooter = !hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavBar && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddAppointment />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
