import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getFPO} from "../redux/actions/fpoAction";
import {useParams} from 'react-router-dom';
import AddTopic from "../components/addTopic"
import SearchBar from "../components/SearchBar";
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom'
import "../styles/Market.scss";
import { Button } from "@material-ui/core";
import Navigation from '../components/Navigation';
import Feedback from "../components/feedback"

function Home({data,status,getFPO}) {
    const [value, setValue] = useState([]);
    const {id}=useParams('id');
    // const [records,SetRecords] = useState([]);
    const [fpoData,SetFpoData] = useState([]);
    // function handleChange(newValue) {
    //     setValue(newValue);
    //     SetRecords(fpoData.filter(item => item.data.name.includes(newValue)))
    // };
    useEffect(() => {
        console.log(getFPO());
    }, []);
    useEffect(()=>{
        if(data===fpoData) return;
        else {
            console.log(data);
            // SetRecords(data);
            SetFpoData(data);
            console.log(data);
            console.log(data.filter(item=>item.name===id));
            setValue(data.filter(item=>item.name===id))
        }
    },[data]);
    return (
        <>
            <Navigation/>
        <div className="container">
            {
                value[0] && 
                <>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <h1 style={{margin:"20px 0"}}>{value[0] && value[0].data.name}</h1>
                        <Feedback/>
                    </div>
                    <div style={{display:"flex", alignItems:"center", marginBottom:"10px"}}>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C16.27 4 10 10.27 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.27 31.73 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z" fill="#3B97A4"/>
                        </svg>
                        <span style={{color:"#3B97A4"}}>Bazar Beria PO PS Kakdwip South 24 Parganas743374,
                        Suryanagar,
                        West Bengal</span>
                    </div>
                    <div style={{display:"flex", alignItems:"center", marginBottom:"10px"}}>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.25 21.59C16.13 27.25 20.76 31.88 26.43 34.76L30.83 30.35C31.38 29.8 32.17 29.64 32.86 29.86C35.1 30.6 37.51 31 40 31C41.11 31 42 31.89 42 33V40C42 41.11 41.11 42 40 42C21.22 42 6 26.78 6 8C6 6.89 6.9 6 8 6H15C16.11 6 17 6.89 17 8C17 10.49 17.4 12.9 18.14 15.14C18.36 15.83 18.2 16.62 17.65 17.17L13.25 21.59Z" fill="#3B97A4"/>
                        </svg>
                        <span style={{color:"#3B97A4"}}>{value[0].data.phone}</span>
                    </div>
                    <p>The average fish production potential was estimated at 250 kg/ha for reservoirs and about 350 kg/ha for wetlands. While reservoirs fisheries and freshwater aquaculture would be the two main pillars of growth, other types of water resources like floodplain and wetlands, irrigation canals, etc. need intervention to enhance production. Another major activity in the aquaculture sector is the cage/ pen culture in open waters, which needs localised and affordable solutions to engage more community members.

                    Jaljeevika is working with the community to install affordable technologies to enhance fish production and productivity. Different strategies are adopted to ensure long term objective like promoting collectives for value chain development, micro-entrepreneurship development program, skill development program to motivate small scale farmers, research and policy advocacy to improvise sectoral growth etc.</p>
                    <div style={{marginTop:"40px"}}>
                        <h2>Product Details</h2>
                            {
                                value[0].data.products.map((item,i)=>(
                                    
                                    <div style={{display:"flex", margin:"30px 0"}}>
                                        <img src={item.img} style={{height:"100px", width:"100px", marginRight:"30px"}}/>
                                        <div>
                                        <h2 style={{color:"#3B97A4"}}>{item.name}</h2>
                                        <p>Rs. {item.price} for {item.qty}kg</p>
                                        <Button style={{background:"#3B97A4", color:"white", marginTop:"10px"}}>Bid price</Button >
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </>
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
