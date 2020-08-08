import React from 'react';
import { firebase }from '../scripts/firebase';

import { Button } from "@material-ui/core";
import Logo from "../assets/logo.png";

class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        };
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    addUser = (e) => {
        e.preventDefault();
        const db=firebase.firestore();


        var email=this.state.email;
        var password=this.state.password;

        firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
            alert(error.message);
        });

    }
    render(){
        return (
            <div>
                <div style={{width:"500px", boxShadow: "2px 1px 12px rgba(0, 0, 0, 0.15)", padding:"50px", margin:"150px auto", borderRadius:"10px"}}>
                        <center>
                            <img src={Logo} alt="Jan Dhan Logo"/>
                        </center>
                        <label>User Email ID</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.updateInput} style={{width:"100%"}} placeholder="admin@bank.com"/>
                        <label>Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.updateInput} style={{width:"100%"}} placeholder="password"/>

                        <Button onClick={this.addUser} variant="contained" color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>LOGIN</Button>
                </div>
            </div>
          );
    }
}

export default User;