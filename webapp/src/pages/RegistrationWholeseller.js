import React from 'react';
import { firebase }from '../scripts/firebase';

import { Button } from "@material-ui/core";
import Logo from "../assets/logo.png";

class User extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            contact:0,
            email:"",
            password:"",
            registration:""
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

        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
            if(error) alert(error.message);
        });


        const userRef= db.collection("wholesaler").add({
           name:this.state.name,
           email:this.state.email,
           contact:this.state.contact,
            registration:this.state.registration

        });
        this.state={
            name:"",
            contact:0,
            email:"",
            password:"",
            registration:""
        };
    }
    render(){
        return (
            <div>
                <div style={{width:"500px", boxShadow: "2px 1px 12px rgba(0, 0, 0, 0.15)", padding:"50px", margin:"150px auto", borderRadius:"10px"}}>
                        <center>
                            <img src={Logo} alt="Jan Dhan Logo"/>
                        </center>
                        
                        <label>Name</label>
                        <input type="text"  id="name" name ="name" onChange={this.updateInput} value={this.state.name}  style={{width:"100%"}} placeholder="XYZ"/>
                        
                       
                        <label>Contact</label>
                        <input type="text"  id="contact" name ="contact" onChange={this.updateInput} value={this.state.contact}  style={{width:"100%"}} placeholder="9020342332"/>
                        
                        <label>Email</label>
                        <input type="email"  id="email" name ="email" onChange={this.updateInput} value={this.state.email}  style={{width:"100%"}} placeholder="abc@xyz.com"/>
                      
                        <label>Registration No</label>
                        <input type="text"  id="registration" name ="registration" onChange={this.updateInput} value={this.state.registration}  style={{width:"100%"}} placeholder="1234"/>

                        
                        <label>Password</label>
                        <input type="password" id="password"  name="password" style={{width:"100%"}} onChange={this.updateInput} value={this.state.password} placeholder="password" />

                        <Button onClick={this.addUser} variant="contained" color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>Register</Button>
                </div>
            </div>
          );
    }
}

export default User;