import React from "react";
import "./index.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="column">
                        <img src="./Assests/images/f1.jpg" />
                    </div>
                    <div className="column" style={{width:"100%"}}>
                        <p><b>Address:</b>Plot No. 72 & 73,4th Floor, Akshay Tech Park,
                            EPIP Zone, Whitefield, Bengaluru, Karnataka 560066
                            <br/>
                            <b>Open :</b> 10 Am 
                            <br/>
                            <b>Closes </b>5Pm
                            <br/>   
                            <b>Phone:</b> 098630 77000</p>
                    </div>
                    <div className="column">
                        <img src="./Assests/images/f2.jpg" />
                    </div>
                    

                   
                    </div>
                </div>
                );
            }
        }
export default Footer;