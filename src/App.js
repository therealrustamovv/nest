import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Footer from "./components/footer/Footer";
import Adv from "./components/adv/Adv";
import Nav from "./components/nav/Nav";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Adv />
      <Nav />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
