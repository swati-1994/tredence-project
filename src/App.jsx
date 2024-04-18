import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DashboardComponent from "./Dashboard/DashboardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <DashboardComponent />
      </div>
    </>
  );
}

export default App;
