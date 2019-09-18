import React from "react";
import "./index.css";

class Technology extends React.Component {
  render() {
    const { name , property} = this.props;
    return <div className={"technology-card"}>{name}{property}</div>;
  }
}

export default Technology;
