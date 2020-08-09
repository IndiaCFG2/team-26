import React from 'react';
import { firebase }from '../scripts/firebase';
import Popup from "reactjs-popup";
import { Button } from "@material-ui/core";
import "../styles/Search.scss" 

import IconButton from '@material-ui/core/IconButton';

 class User extends React.Component {
     constructor(){
         super();
         this.state={
            name:"",
            content:"",
            author:"",
            url:""
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


         var today= new Date();
            var tag=this.state.name;
            // var posts=db.collection("forum").where("name","==","tag");
            // console.log(posts);
            // db.collection("forum").where("name","==",tag).get().then(function(querySnap){
            //     querySnap.forEach(function(doc){
            //         console.log(doc);
            //     })
            //     .catch(function(error){
            //         console.log("error");
            //     })
            // });
            var post={
                content:this.state.content,
                author:this.state.author,
                url:this.state.url,
            
                date:today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
        
            }
            db.collection("forum").where("name", "==", tag)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    var data1=doc.data();
                    data1.posts.push(post);
                    firebase.firestore().collection("forum").doc(doc.id).update(data1);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            

        //  const userRef= db.collection("forum").add({
        //     posts:[{
        //         content:this.state.content,
        //         author:this.state.author,
        //         url:this.state.url,
            
        //         date:today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
        //     }]
        //  });
         this.setState({
             name:"",
             content:"",
             author:"",
             url:""
         })
     }
         render() {
             return(
                <Popup trigger={
                        <div style={{padding:"10px", backgroundColor:"#f3f3f3", borderRadius:"5px", cursor:"pointer"}}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#3B77FA"/>
                            </svg>
                        </div>
                        } 
                    modal contentStyle={{width:"500px"}}>
                    {close => (
                        <div className="modal">
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <h2 style={{fontFamily:"Roboto", textAlign:"center", width:"90%"}}>Enter Details</h2>
                                <IconButton onClick={close}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                                    </svg>
                                </IconButton>
                            </div>
                        <div className="content" style={{padding:"20px"}}>
                            <select id="name"  name ="name" onChange={this.updateInput} >
                                <option value="Government Policies">Government Policies </option>
                                <option value="Economy">Economy</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Weather">Weather</option>
                                <option value="Technology">Technology</option>
                                <option value="Market">Market</option>
 

                            </select>
         
                        <br/>
                        </div>
                        <div className="content" style={{padding:"20px"}}>
                            <textarea rows="5" cols="75" placeholder="Content" id="content"  name ="content" onChange={this.updateInput} value={this.state.content}/><br/>
                        </div>
                        <div className="content" style={{padding:"20px"}}>
                            <input placeholder="Author Name" id="name1"  name ="author" onChange={this.updateInput} value={this.state.author}/><br/>
                        </div>
                        <div className="content" style={{padding:"20px"}}>
                            <input placeholder="URL Link" id="name"  name ="url" onChange={this.updateInput} value={this.state.url}/><br/>
                        </div>
                        <div className="actions" style={{padding:"0 20px 10px"}}>
                                <Button variant="contained" onClick={this.addUser} color="primary" style={{backgroundColor:'#3265D5',width:'100%' }}>Save</Button>
                        </div>
                        </div>
                    )}
                </Popup>
             )
         }
     }
 

 export default User;