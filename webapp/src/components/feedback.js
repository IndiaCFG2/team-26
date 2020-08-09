import React,{useState} from "react";
import Popup from "reactjs-popup";
import { Button } from "@material-ui/core";
// import "../../assets/styles/Search.css" 
// import {postUpdate} from "../../utils/api"
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';



export default function Broadcast ()  {
    // const [formData, setFormData] = useState({
    //     title:'',
    //     description:'',
    //     designation:'',
    //     location:'',
    //     additionalFileUrl:'',
    //     date:new Date().toISOString().slice(0,10),
    //     time:new Date().toTimeString().slice(0,8),
    //     postBy:'SBI',
    //     imageUrl:"#"
    //   });
    
    //   const handleChange = (e) => {
    //     let field=e.target.id;
    //     let val=e.target.value;
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [field]: val
    //     }));
    //   };
    
    //   const handleSubmit = () =>{
    //     console.log(formData);
    //     postUpdate(formData)
    //     .then(res=>console.log(res.data))
    //     .catch(err=>console.log(err));
    //   };

  return(
    <Popup trigger={
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44L12 36H40C42.21 36 44 34.21 44 32V8C44 5.79 42.21 4 40 4ZM26 28H22V24H26V28ZM26 20H22V12H26V20Z" fill="black"/>
        </svg>
            } 
      modal contentStyle={{width:"700px"}}>
      {close => (
        <div className="modal">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <h2 style={{fontFamily:"Roboto", textAlign:"center", width:"90%"}}>Provide Feedback</h2>
                  <IconButton onClick={close}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#3B97A4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#3B97A4"/>
                    </svg>
                  </IconButton>
              </div>
          <div className="content" style={{padding:"20px"}}>
          <Rating name="read-only" value={2} precision={0.25} style={{height:"50px"}}/><br/><br/>
              <label>Remarks</label><br/>
              <textarea id="title" style={{width:"100%", height:"50px"}}/><br/>
          </div>
          <div className="actions" style={{padding:"0 20px 10px"}}>
            <center>
                <Button variant="contained" onClick={()=>{
                  close();
                  }} color="primary" style={{backgroundColor:'#3265D5',width:'100%' }}>Save</Button>
            </center>
          </div>
        </div>
      )}
  </Popup>
);
}