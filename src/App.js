import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/dashboard"; 
import Calendar from "./components/calendar/calendar";
import Schemes from "./components/schemes/schemes";
import Remedies from "./components/remedies/remedies";
import Prediction from "./components/prediction/prediction"
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Route */}
        <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" replace />}>
          <Route index element={<Navigate to="prediction" replace />} /> 
          <Route path="prediction" element={<Prediction/>} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="remedies" element={<Remedies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
