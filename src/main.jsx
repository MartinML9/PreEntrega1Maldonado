import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBc0gCqb9VRbZYLLFnbIeAVCkuO0g3T9D8",
  authDomain: "curso-reactjs-coderhouse.firebaseapp.com",
  projectId: "curso-reactjs-coderhouse",
  storageBucket: "curso-reactjs-coderhouse.appspot.com",
  messagingSenderId: "768513447329",
  appId: "1:768513447329:web:2557a5dbac09288ed327e0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
