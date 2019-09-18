import React from "react";
import { Route } from "react-router-dom";
import UserHome from "./Components/User-Home/index";
import Attendence from "./Components/Attendance/index";
import Settings from "./Components//Settings/index";

import "./index.css";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Route exact path="/dashboard" component={UserHome} />
        <Route path="/dashboard/attendence" component={Attendence} />
        <Route path="/dashboard/settings" component={Settings} />
      </div>
    );
  }
}

export default Content;
