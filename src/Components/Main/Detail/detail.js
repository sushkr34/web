import React from "react";

import { Link } from 'react-router-dom';


class Register extends React.Component {
    state = {
        fields: {
            username:'',
            password:'',
            mobile:'',
            // gender:'',
        //    birthdate: {
        //        day:'',
        //        month :'',
        //        year : ''
           //}
           date:''
        },
        err :{}
    

    };
    handleChange = (key, value) => {
        const {fields}=this.state;
        this.setState({
            ...this.state,
            fields:{...fields,[key]:value}
        })
    }
    validateHandler = () => {
        
        
    }
    render() {
        const { fields = {} } = this.state;
        const { username, password,mobile,date} = fields;
        //console.log('username','password')
        const { handleChange } = this;
        
        //console.log('fields')
        return (
            <div className='wrapper'>
                <div />
                <div className='division'>
                    <div>
                        <form >
                        <h2>Create a account </h2>
                        <p>Its quick and easy</p>
                       
                        <input onChange={event => {
                            //console.log(event.target.value);
                            handleChange("username",event.target.value );
                            }} 
                            //use patter ="()" for chechking , title ="xyz" for displaying messaged to what should be entered 
                            type="text"  value ={username} placeholder="Username" required /> &nbsp;
                        <input  onChange={event => {
                            handleChange("password",event.target.value );
                            }}  
                         type="password" placeholder="Password" value ={password} required />
                        <input  onChange={event => {
                            handleChange("mobile",event.target.value );
                            }} 
                        type="text" maxLength="10" placeholder="Mobile No" style={{ width: "99%" }} required value ={mobile}  />
                        <p>Birthday ?</p>
                        <input onClick={event =>{
                            this.handleChange("date",event.target.value);
                             }}
                        type="date" name="bday" min="1900-12-1"  value ={date} required /><br />
                        <p>Gender</p>
                        <input type="radio" name="gender" value="male" /> Male
                        <input type="radio" name="gender" value="female" /> Female
                        <input type="radio" name="gender" value="other" /> Other
                        <p>By clicking on the singup , you agree to the <a href="#">Terms & Privacy</a></p>
                        <button type="submit" style={{ backgroundColor: "lightgreen " }} >Sign up </button>
                        </form>
                        <Link to="/">
                            <button type="button" >  Go Home </button>

                        </Link>
                    </div>
                </div>
                <div />
            </div>
        )
    }
}
export default Register;
 