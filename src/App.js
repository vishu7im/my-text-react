import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const toogle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#646363";
      showalert("Dark mode is activate ", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is activate ", "success");
    }
  };
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, msgtype) => {
    setalert({
      msg: message,
      type: msgtype,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar Title="TextIs" Darkmod={mode} Toogle={toogle} />
      <Alert Alert={alert} />
      <Textbox heading="Start your journey " Alert={showalert} Darkmod={mode} />
      {/* <Router>
        <Switch>
          <Route path="/about">
            <About Darkmod={mode} />
          </Route>
          <Route path="/">
            <Textbox
              heading="Start your journey "
              Alert={showalert}
              Darkmod={mode} />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
