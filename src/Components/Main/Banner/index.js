import React from "react";
import "./index.css";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="row">
                    <div className="column">
                        <img src="./Assests/images/gwl.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src="./Assests/images/2019.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src="./Assests/images/google.jpg" style={{ width: "100%" }} />
                    </div>
                </div>

            </div>
        );
    }
}
export default Banner;