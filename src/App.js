import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Appbar from "./Components/Pages/Appbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

import NotPage from "./Components/Pages/NotPage";
import AddUsers from "./Components/Users/AddUsers";
import EditUser from "./Components/Users/EditUser";

import SingleUser from "./Components/Users/SingleUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Outlet />
              </Home>
            }
          />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUsers />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<SingleUser />} />

          <Route path="*" element={<NotPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
