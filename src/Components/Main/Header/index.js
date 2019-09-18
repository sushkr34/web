import React from "react";
import "./index.css";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="back" style={{width:"100%"}}>
                <div className="header" style={{width:"100"}}>
                    <h1><img className="goodwork" src="./Assests/images/GoodWorkLabs.png"/>
                    GoodWork Labs - Technology Superstar (Bangalore)
                    <Link to ='/login' >
                             <button type="button">Login</button>
                    </Link>
                    <Link to = '/detail'>
                        <button type="button">Detail</button>

                    </Link>
                   </h1>
                </div>
            </div>
        );
    }
}

export default Header;