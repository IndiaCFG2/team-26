import React,{useState,useEffect} from "react";


const ContactForm = (props) => {
    const initialFieldValues = {
        fullName:"",
        email:""
    }
    var  [values,setValues] = useState(initialFieldValues)

    const handleInputChange = e =>{
        var { name , value }  = e.target
        setValues(
            {
                ...values,
                [Name]:value
            }
        )
    }
    
     const handleFormSubmit = e =>{
         e.preventDefault();
         const addOrEdit = obj=>{
            props.addOrEdit(values)
        }
     }


    return ( 
       <form autocomplete="off" onSubmit={handleFormSubmit}>
           <div className="form-group">
               <div className="input-group-prepend">
                   <div className="input-group-text"></div>
               </div>
               <input className="form-control" placeholder="Full Name" name="fullName" value={ values.fullName} 
                 onChange = { handleInputChange}/> 
            </div>

            <div className="form-group">
               <div className="input-group-prepend">
                   <div className="input-group-text"></div>
               </div>
               <input className="form-control" placeholder="Email" name="email" value={ values.email} 
               onChange = { handleInputChange}/> 
            </div>

            <div className="form-group"> 
                   <input type="submit" value="Save" className="btn btn-primary btn-block"/>
            </div>

       </form>
    );
}

export default ContactForm;