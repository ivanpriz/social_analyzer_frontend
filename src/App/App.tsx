import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./Navbar";
import { MetricsPage } from "./MetricsPage/MetricsPage";
import { MainPage } from "./MainPage/MainPage";
import { AboutPage } from "./AboutPage";
import "./App.css";


// TODO make icon on top of navbar
function App() {
  return (
    <BrowserRouter>
      <div className="app"> 
        <Navbar />

        <Routes>
          <Route path="/" element={ <MainPage /> }/>
          <Route path="/metrics" element={ <MetricsPage /> } />
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
