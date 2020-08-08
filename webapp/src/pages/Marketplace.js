import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getSlotTime} from "../redux/actions/slotTimeAction"
import "../styles/Community.scss";
import AddTopic from "../components/addTopic"
import SearchBar from "../components/SearchBar";

function Home({data,status,getSlotTime}) {
    const [value, setValue] = useState("");
    function handleChange(newValue) {
        setValue(newValue);
        // setRecords(data.filter(item => item.placeId.includes(newValue)))
    }
    return (
        <div className="container">
            <h1 style={{margin:"20px 0"}}>Market Place</h1>
            <SearchBar value={value} onChange={handleChange}/>
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
