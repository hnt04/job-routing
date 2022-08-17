import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { AuthProvider } from "./auth/AuthContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;