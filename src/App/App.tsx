import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RequireAuth } from "./components/RequireAuth";
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
          {/* Routes require auth */}
          <Route element={ <RequireAuth /> }>
            <Route path="/" element={ <MainPage /> }/>
            <Route path="/metrics" element={ <MetricsPage /> } />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          
          {/* Public routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
