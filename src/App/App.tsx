import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { MetricsPage } from "./MetricsPage/MetricsPage";
import { MainPage } from "./MainPage/MainPage";
import { AboutPage } from "./AboutPage";
import { RegistrationPage } from "./RegistrationPage";
import "./App.css";


// TODO make icon on top of navbar
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage /> }/>
          <Route path="/metrics" element={ <MetricsPage /> } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
