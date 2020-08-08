import React,{useState} from 'react';
import { Button } from "@material-ui/core";
import Logo from "../assets/logo.png";
// import {UserLogin} from "../utils/api";
import { useHistory,withRouter } from "react-router-dom";


function Login() {
  const history=useHistory();
  const [credential, setCredential] = useState({
      email:"",
      name:"",
      phone:"",
      registration_id:"",
      product_type:""    
  });

  const [loading,setLoading]=useState(false);
  const handleChange = (e) =>{
      var field=e.target.id;
      var val=e.target.value;
      setCredential(prevState => ({
        ...prevState,
        [field]: val
      }));
  };
  const handleSubmit = () =>{
    //   setLoading(true);
    //   UserLogin(credential)
    //   .then(res => {
    //     localStorage.setItem("Bank",res.user.displayName);
    //     })
    //   .then(()=>history.push('/'))
    //   .catch(err=>console.log(err));
  };
  return (
    <div>
        <div style={{width:"500px", boxShadow: "2px 1px 12px rgba(0, 0, 0, 0.15)", padding:"50px", margin:"150px auto", borderRadius:"10px"}}>
                <center>
                    <img src={Logo} alt="Jan Dhan Logo"/>
                </center>
                <label>Name</label>
                <input type="text" id="name" onChange={handleChange} style={{width:"100%"}} placeholder="xyz" required/>

                <label>Contact</label>
                <input type="number" id="phone" onChange={handleChange} style={{width:"100%"}} placeholder="4632892980" required/>

                <label>Email</label>
                <input type="email" id="email" onChange={handleChange} style={{width:"100%"}} placeholder="admin@bank.com" required/>

                <label>Registration</label>
                <input type="text" id="registration_id" onChange={handleChange} style={{width:"100%"}} placeholder="Enter Registration number" required/>

                <label>Product Type</label>
                <input type="text" id="product_type" onChange={handleChange} style={{width:"100%"}} placeholder="Product Type" required/>

                <Button variant="contained" color="primary" style={{backgroundColor:'#3265D5',width:'100%'}}>{loading ? "Signing in..":"Register"}</Button>
        </div>
    </div>
  );
}

export default withRouter(Login);