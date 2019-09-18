import React from "react";
import Header from "./Components/Header/index";
import Menu from "./Components/Menu/index";
import Content from "./Components/Content/index";
import "./index.css";
class Dashboard extends React.Component {
    render() {
        return (
            <div>

                <Header />
                <div className="flex-layout">
                    <Menu />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Dashboard;