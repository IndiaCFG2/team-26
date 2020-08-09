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
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B77FA"/>
        </svg>
            } 
      modal contentStyle={{width:"700px",background:"white"}}>
      {close => (
        <div className="modal">
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <h2 style={{fontFamily:"Roboto", textAlign:"center", width:"90%"}}>Provide Feedback</h2>
                  <IconButton onClick={close}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                    </svg>
                  </IconButton>
              </div>
              <div className="content" style={{padding:"20px"}}>
                <select id="name"  name ="name" style={{width:"100%", height:"40px"}}>
                    <option value="Government Policies">Government Policies </option>
                    <option value="Economy">Economy</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Weather">Weather</option>
                    <option value="Technology">Technology</option>
                    <option value="Market">Market</option>
                </select>
                <br/>
                </div>
                <div className="content" style={{padding:"20px",width:"100%"}}>
                <textarea rows="5" cols="75" placeholder="Content" id="content"  name ="content" style={{padding:"20px",width:"100%"}}/><br/>
                </div>
                <div className="content" style={{padding:"20px"}}>
                <input placeholder="Author Name" id="name1"  name ="author"/><br/>
                </div>
                <div className="content" style={{padding:"20px"}}>
                <input placeholder="URL Link" id="name"  name ="url"/>
                </div>
                {/* <div className="actions" style={{padding:"0 20px 10px"}}>
                    <Button variant="contained" onClick={this.addUser} color="primary" style={{backgroundColor:'#3265D5',width:'100%' }}>Save</Button>
                </div> */}
          {/* <div className="content" style={{padding:"20px"}}>
          <Rating name="read-only" value={2} precision={0.25} style={{height:"50px"}}/><br/><br/>
              <label>Remarks</label><br/>
              <textarea id="title" style={{width:"100%", height:"50px"}}/><br/>
          </div> */}
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


