import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getFPO} from "../redux/actions/fpoAction"
import AddTopic from "../components/addTopic"
import SearchBar from "../components/SearchBar";
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom'
import "../styles/Market.scss";
import Navigation from '../components/Navigation';
import { Button } from "@material-ui/core";


function Home({data,status,getFPO}) {
    const [value, setValue] = useState("");
    const tabs=["Product Listing","FPO Listing"];
    const [records,SetRecords] = useState([]);
    const [fpoData,SetFpoData] = useState([]);
    const[active, setActive]=useState(1);
    const setTab = (t) => {
        if(t!==active){
            setActive(t);
        }
    }
    function handleChange(newValue) {
        setValue(newValue);
        SetRecords(fpoData.filter(item => item.data.name.includes(newValue)))
    };
    function SortRatings(){
        const arr = [...records].sort((a, b) => a['data']['rating']-b['data']['rating']);
        SetRecords(arr.reverse());
    }
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
            <h1 style={{margin:"20px 0"}}>Marketplace</h1>
            <ul className="tab" style={{fontSize:"12px"}}>
                {tabs.map((tab,i)=>(
                    <li key={i} className={active===(i+1) ? "tab-ele active":"tab-ele"} onClick={()=>setTab(i+1)}>{tab}</li>
                ))}
            </ul>
            <div className={active===1 ? "section active-tab" : "section"}>
                <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"40px"}}>
                    <div style={{width:"300px",textAlign:"center", boxShadow: "0px 1px 10px #999", borderRadius:"10px", padding:"20px"}}>
                        <img style={{height:"200px", width:"200px"}} src="https://static01.nyt.com/images/2020/03/17/well/askwell-wholegrains/askwell-wholegrains-mediumSquareAt3X.jpg"/>
                        <h3>Grains</h3>
                    </div>
                    <div style={{width:"300px",textAlign:"center", boxShadow: "0px 1px 10px #999", borderRadius:"10px", padding:"20px"}}>
                        <img style={{height:"200px", width:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVGjSYk0H8hRSXqMhzxz1U56aeZfwGYqoFtA&usqp=CAU"/>
                        <h3>Vegetables</h3>
                    </div>
                    <div style={{width:"300px",textAlign:"center", boxShadow: "0px 1px 10px #999", borderRadius:"10px", padding:"20px"}}>
                        <img style={{height:"200px", width:"200px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.657xw:0.983xh;0.191xw,0&resize=640:*"/>
                        <h3>Fruits</h3>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={{width:"300px",textAlign:"center", boxShadow: "0px 1px 10px #999", borderRadius:"10px", padding:"20px"}}>
                        <img style={{height:"200px", width:"200px"}} src="https://previews.123rf.com/images/themorningglory/themorningglory2005/themorningglory200500037/146541945-many-type-colorful-of-seafood-fish-sell-in-fishery-local-market-food-industry.jpg"/>
                        <h3>Fish</h3>
                    </div>
                    <div style={{width:"300px",textAlign:"center", boxShadow: "0px 1px 10px #999", borderRadius:"10px", padding:"20px"}}>
                        <img style={{height:"200px", width:"200px"}} src="data:image/jpeg;base64,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"/>
                        <h3>Seafood</h3>
                    </div>
                </div>
            </div>
            <div className={active===2 ? "section active-tab" : "section"}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <SearchBar value={value} onChange={handleChange}/>
                <div>
                    <p>Filter by</p>
                    <Button style={{background:"#3B97A4", color:"white", marginTop:"10px"}} onClick={SortRatings}>Ratings</Button >
                </div>
            </div>
                {
                    records.length===0 ? <div>Loading</div> :
                    (   <div style={{padding:"0 35px"}}>
                            {
                                records.map( fpo => ( fpo.data &&
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
