import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
class Login extends React.Component {
    state = {
        defaultCredential: {
            username: "sush",
            password: "sush"

        },
        userCredential: {
            username: '',
            password: ''
        }
    };
    // changeHandler = (value, key) => {
    //     const { userCredential } = this.state
    //     this.setState({
    //         ...this.state,
    //         userCredential: { ...userCredential, [key]: value }
    //     })
    // }
    handleChange = (key, value) => {
        const { userCredential } = this.state;
        this.setState({
            ...this.state,
            userCredential: { ...userCredential, [key]: value }
        })
    }
    validateHandler = () => {
        const { defaultCredential, userCredential } = this.state;
        const { history } = this.props;
        return ((defaultCredential.username === userCredential.username) && (defaultCredential.password === userCredential.password)) ?
        history.push("/dashboard") :
            alert("login unsuccessful ")

    }


    render() {
        const { userCredential = {} } = this.state;
        const { username, password } = userCredential;
        
        const { handleChange } = this;
        const { validateHandler } = this;
        return (
            <div style={{textAlign:"center"}}>
                Login
        <br />
                <br />
               
                <form onSubmit={validateHandler}>
                <input
                    onChange={event => {
                        handleChange("username",event.target.value );
                    }}
                    value={username}
                    placeholder="Username" required
                />
                <br/>
                <input
                    onChange={event => {
                        handleChange("password",event.target.value );
                    }}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                />
                <br />
                <br />
               
                <button type="submit" >Login</button>
                
                </form>
               
                <br />
                <br />
                {/* <Link to ='/login' >
                             <button type="button">Login</button>
                    </Link> */}
                <Link to ='/Register'>
                    <button type ="button" > Register
                    </button>
                </Link>
                <br/>
                <Link to ="/">
                    <button type ="button" >  Go Home 
                    </button>
                </Link>
                
            </div>

        );
    }
}

export default Login;