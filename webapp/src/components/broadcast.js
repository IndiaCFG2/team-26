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
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18V30H14L24 40V7.99996L14 18H6ZM33 24C33 20.47 30.96 17.42 28 15.95V32.06C30.96 30.58 33 27.53 33 24ZM28 6.45996V10.59C33.78 12.31 38 17.66 38 24C38 30.34 33.78 35.69 28 37.41V41.54C36.01 39.72 42 32.57 42 24C42 15.43 36.01 8.27996 28 6.45996Z" fill="black"/>
        </svg>
            } 
      modal contentStyle={{width:"500px"}}>
      {close => (
        <div className="modal">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <h2 style={{fontFamily:"Roboto", textAlign:"center", width:"90%"}}>Broadcast</h2>
                  <IconButton onClick={close}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#3B97A4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#3B97A4"/>
                    </svg>
                  </IconButton>
              </div>
          <div className="content" style={{padding:"20px"}}>
                <p>Are you sure you want to Broadcast the message to all farmers ?</p>
          </div>
          <div className="actions" style={{padding:"0 20px 10px"}}>
            <center>
                <Button variant="contained" onClick={()=>{
                  close();
                  }} color="primary" style={{backgroundColor:'#3265D5',width:'100%' }}>Yes</Button>
            </center>
          </div>
        </div>
      )}
  </Popup>
);
}


