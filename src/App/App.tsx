import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { MetricsPage } from "./MetricsPage/MetricsPage";
import { MainPage } from "./MainPage/MainPage";
import { AboutPage } from "./AboutPage";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage /> }/>
          <Route path="/metrics" element={ <MetricsPage /> } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
