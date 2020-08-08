import React from 'react'

export default function Footer() {
    const style={
        background:"#e7e7e7",
        textAlign:"center", 
        padding:"20px 0", 
        marginTop:"60px", 
        width:"100%" ,
        // position:"fixed",
        // left:0,
        // bottom:0
    }
    return (
        <div style={style}>
            <div>For Sales Enquiry</div>
            <div>Contact: +1-484-753-392</div>
            <a href="mailto:contact@companionast.com">contact@companionast.com</a>
        </div>
    )
}
