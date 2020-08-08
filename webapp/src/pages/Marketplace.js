import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getFPO} from "../redux/actions/fpoAction"
import "../styles/Community.scss";
import AddTopic from "../components/addTopic"
import SearchBar from "../components/SearchBar";
import Rating from '@material-ui/lab/Rating';


function Home({data,status,getFPO}) {
    const [value, setValue] = useState("");
    function handleChange(newValue) {
        setValue(newValue);
        // setRecords(data.filter(item => item.placeId.includes(newValue)))
    };
    useEffect(() => {
        console.log(getFPO());
    }, [])
    return (
        <div className="container">
            <h1 style={{margin:"20px 0"}}>Market Place</h1>
            <SearchBar value={value} onChange={handleChange}/>
                {
                    data.length===0 ? <div>Loading</div> :
                    (   <>
                            {
                                data.map( fpo => (
                                    <div style={  {backgroundColor:"#EAEAEA", padding:"10px 20px", marginBottom:"20px", borderRadius:"5px"}}>
                                        <h3 style={{marginBottom:"2px"}}>{fpo.name}</h3>
                                        <p style={{margin:0, fontSize:"14px"}}>{fpo.Email}</p>
                                        <Rating name="read-only" value={fpo.rating} precision={0.25} readOnly/>
                                        <p>{fpo.members} members</p>
                                    </div>
                                ))
                            }
                        </>
                    ) 
                }
        </div>
    )
}


const mapStateToProps = (state) => ({
    data : state.pfo.data,
    status:state.pfo.status
})

const mapDispatchToProps = dispatch => {
    return{
        getFPO: () => dispatch(getFPO())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
