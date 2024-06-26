import React from "react"
import ReactDOM from "react-dom/client"
import { App }from "./App.jsx"
import "./css/index.css"
import { AudioProvider } from "./components/AudioContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </React.StrictMode>
)

