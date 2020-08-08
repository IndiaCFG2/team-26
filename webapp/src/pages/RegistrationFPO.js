import React from 'react';
import { firebase }from '../scripts/firebase';

import { Button } from "@material-ui/core";
import Logo from "../assets/logo.png";

class User extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            members:"",
            contact:"",
            email:"",
            img:"",
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

        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
            alert(error.message);
        });


        const userRef= db.collection("fpo").add({
           name:this.state.name,
           products:[{
                img:"",
                name:"",
                price:100,
                quantity:"100",
           }],
           rating:5,
           Email:this.state.email,
           img:this.state.img,
           members:this.state.members,
           phone:this.state.contact,
           latitude:"",
           longitude:""

        });
        this.state={
            name:"",
            members:"",
            contact:"",
            email:"",
            img:"",
            password:""
        };
    }
    render(){
        return (
            <div>
                <div style={{width:"500px", boxShadow: "2px 1px 12px rgba(0, 0, 0, 0.15)", padding:"50px", margin:"150px auto", borderRadius:"10px"}}>
                        <center>
                            <img src={Logo} alt="Jan Dhan Logo"/>
                        </center>
                        
                        <label>Name Of The FPO</label>
                        <input type="text"  id="name" name ="name" onChange={this.updateInput} value={this.state.name}  style={{width:"100%"}} placeholder="XYZ"/>
                        
                        <label>Email</label>
                        <input type="email"  id="email" name ="email" onChange={this.updateInput} value={this.state.email}  style={{width:"100%"}} placeholder="abc@xyz.com"/>
                        
                        <label>Members</label>
                        <input type="text"  id="members" name ="members" onChange={this.updateInput} value={this.state.members}  style={{width:"100%"}} placeholder="10"/>
                        
                        <label>Contact</label>
                        <input type="text"  id="contact" name ="contact" onChange={this.updateInput} value={this.state.contact}  style={{width:"100%"}} placeholder="9020342332"/>

                        <label>URL For The LOGO</label>
                        <input type="text"  id="img" name ="img" onChange={this.updateInput} value={this.state.img}  style={{width:"100%"}} placeholder="https://www.xyz.com"/>
                        
                        <label>Password</label>
                        <input type="password" id="password"  name="password" style={{width:"100%"}} onChange={this.updateInput} value={this.state.password} placeholder="password" />

                        <Button onClick={this.addUser} variant="contained" color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>Register</Button>
                </div>
            </div>
          );
    }
}

export default User;