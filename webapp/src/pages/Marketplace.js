import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getFPO} from "../redux/actions/fpoAction"
import AddTopic from "../components/addTopic"
import SearchBar from "../components/SearchBar";
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom'
import "../styles/Market.scss";
import Navigation from '../components/Navigation';


function Home({data,status,getFPO}) {
    const [value, setValue] = useState("");
    const [records,SetRecords] = useState([]);
    const [fpoData,SetFpoData] = useState([]);
    function handleChange(newValue) {
        setValue(newValue);
        SetRecords(fpoData.filter(item => item.data.name.includes(newValue)))
    };
    useEffect(() => {
        console.log(getFPO());
    }, []);
    useEffect(()=>{
        if(data===records) return;
        else {
            console.log(data);
            SetRecords(data);
            SetFpoData(data);
        }
    },[data]);
    return (
        <>
            <Navigation/>
        <div className="container">
            <h1 style={{margin:"20px 0"}}>Market Place</h1>
            <SearchBar value={value} onChange={handleChange}/>
                {
                    records.length===0 ? <div>Loading</div> :
                    (   <div style={{padding:"0 35px"}}>
                            {
                                records.map( fpo => (
                                    <Link to={`/details/${fpo['name']}`}>
                                            <div className="fpodesc" style={{backgroundColor: "#EDEDEB", boxShadow: "0px 1px 10px #999", padding:"30px", marginBottom:"30px", borderRadius:"5px", cursor:"pointer", textDecoration:"none"}}>
                                            <div style={{display:"flex", alignItems:"center"}}>
                                                <img src={fpo.data.img} className="fpo-img" style={{height:"150px", width:"150px", borderRadius:"50%", marginRight:"30px"}}/>
                                                <div>
                                                    <h2 style={{marginBottom:"2px"}}>{fpo.data.name}</h2>
                                                    <p style={{margin:0, fontSize:"14px"}}>{fpo.data.Email}</p>
                                                    <Rating name="read-only" value={fpo.data.rating} precision={0.25} readOnly/>
                                                    <p>{fpo.data.members} members</p>
                                                </div>
                                            </div>
                                            <div style={{marginTop:"30px"}}>
                                                <h3>Product Listing</h3>
                                                <ul style={{marginLeft:"30px"}}>
                                                    {
                                                        fpo.data.products.map(item=>(
                                                        <li>{item['name']}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ) 
                }
        </div>
        </>
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
