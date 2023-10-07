import React, { component } from "react";
import { BrowserRouter as Router, Router } from "react-router-dom";

import Navbar from "./components/NavBar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import FileUpload from "./components/FileUpload";
import AssignmentList from "./components/AssignmentList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Router exact path="/" component={Landing} />
        <Router exact path="/register" component={Register} />
        <Router exact path="/login" component={Login} />
        <Router exact path="/profile" component={Profile} />
        <Router exact path="/uploads" component={FileUpload} />
        <Router exact path="/assignmentlist" component={AssignmentList} />
      </div>
    </Router>
  );
}
export default App;
