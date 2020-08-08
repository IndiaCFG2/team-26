import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {getSlotTime} from "../redux/actions/slotTimeAction"

function Home({data,status,getSlotTime}) {
    useEffect(()=>{
        getSlotTime();
    });
    return (
        <div className="container">
            <p>hello</p>
        </div>
    )
}


const mapStateToProps = (state) => ({
    data : state.slotTime.data,
    status:state.slotTime.status
})

const mapDispatchToProps = dispatch => {
    return{
        getSlotTime: () => dispatch(getSlotTime())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
