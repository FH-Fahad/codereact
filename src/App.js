import { useState } from "react";
import "./App.css";
import Alart from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Alart alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter your text below" />
      </div>

      {/* <div className="container my-3">
        <About />
        <p>This is our about page</p>
      </div> */}
    </>
  );
}

export default App;
