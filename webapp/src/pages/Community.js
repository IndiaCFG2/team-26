import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getSlotTime} from "../redux/actions/slotTimeAction"
import "../styles/Community.scss";
import AddTopic from "../components/addTopic"
import Navigation from '../components/Navigation';


function Home({data,status,getSlotTime}) {
    const [tag,setTag]=useState(0);
    const [topics,setTopics]=useState([]);
    const [newTopic, setNewTopic]=useState("");
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        getSlotTime();
    });
    useEffect(() => {
        setPosts(data[tag]);
    }, [tag,data]);
    useEffect(()=>{
        var arr=[];
        data.map(d=>{
            arr.push(d['name'])
        });
        if(arr!==topics) setTopics(arr);
    },[data]);
    useEffect(()=>{
        // console.log(topics);
    },[topics]);
    const handleSubmit = (val) =>{
        var arr=topics;
        arr.push(val);
        console.log(arr,val);
        // setTopics(arr);  
        setTopics(prevState=> [...prevState, val]);  
    };
    return (
        <>
        <Navigation/>
        <div className="container">
            <h1 style={{margin:"20px 0"}}>Community Forum</h1>
            {
                data.length===0 ? <div>Loading</div> :
                (   <>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <h3 style={{marginRight:"20px"}}>{data.length} topics</h3>
                            {/* <div tabIndex="0" style={{cursor:"pointer"}}>
                            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38 26H26V38H22V26H10V22H22V10H26V22H38V26Z" fill="black"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className="tags">
                            {
                                topics.map((topic,i) => <div onClick={()=>setTag(i)} tabIndex="0" style={{cursor:"pointer"}}>{topic}</div>)
                            }
                            <AddTopic />
                        </div>
                    </div>
                    <div>
                        {posts && posts['posts'] && posts['posts'].map(p=>
                            <div className="posts">
                                <div style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                                    <img alt="profile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAZlBMVEX///8AAAD29vaurq77+/vQ0NCioqIxMTHn5+fLy8vu7u7r6+tfX19aWlrj4+O8vLw6OjpQUFDd3d0/Pz9/f3+cnJxpaWkICAiVlZV4eHgoKCiOjo7X19cQEBC0tLQVFRVISEgfHx/8OVbkAAADu0lEQVR4nO2a2ZajIBCG2wUQjQtxSTSJy/u/5LQNLklHsdGiz8zwXSZ18JdaKMCPD4PBYDAYDAaDwWAwGP53bB/VGOcY18i3f01FhAvSWJyGhHn0KyrqxHolcVzNIty4/aaip421uscv3qroKQJ9MuLLooxPal0yrvOndgljLOnmP121yyAZPfcBYZ9pRjQLGWU8CvT0ByovGoU4w7NC+pqkLg2HPx1oGd6YF+9KhTvmkQcrw24lLzxMVwtbR7B03gchGFKGL2p5tmKTcZMEsp6JXAlXjULwnHEr/ojzqtWZG1Vwax6Ve6VHeAZJzNQp+QN8iZnPzUooGSJKC6khryKJTK8q3tZa6cDWsprHn3x4j8dzDKTjxiulfLp9XnVvQDpOywvLM2KZkQeSGuGmrO3JNpQ7ddjm2eYeZP+4jtPm8sQL3glIBx89lHcWdghaUPOv0Yl8QQ8IaAty/xq9oVJDyne9dyAdgbUxUHmYWlCdkMsDlUgNeVk/gTUgojuVrRuxBRoeY2Mh6cWHnh5q2f8YKojkTcWsQVWPHvrgz1hLGdE8PuRppc6wXyPLPYjoPbYsyzvgJeRz6VjKyYAJC6jiIRi2a9X7bhyJ2YDfaItQtS7O96yx6+HkATJIOV4qHmUVr5FIB41WCrzd74lGIVZaTzu78+wcM9VykjoTYnWsxDGNcck6S7OMT9eE1hqhBqcI8IqMXOeZMlqaEga3u36LG1dvVHRQW7g1aJY+nSsnN8glZQ2fOhlL0yRNWeZQjQfrb7A5v6rBYDD8bbh2gGKcX3tyHKPA1n1r2oOuRdrN6/qlS4ur3vXl7hBrCeLctUyLG9WsWVTR07R1BC7lXC5PxURVrl9J7IWud4RzQrgmIPp+m96QtGWMtSn57qsCqF2+vkhoyxrdPb7i294d1WX7IgbiSip+igt2o+9aDpve2NwsOTyPs9mrkgwt9z02us0UN1tOwbfjnaahH1h6H4Ufk/npwHYxnsatts30zIuXw3xTTx7Jt75dkE9KDvogZJIR/qQ6RVOtOeQw5DZO8E+Hq0d3HnAzNW5lk5+XpelkYPdZ6ugUpbifvmfaGSPx3pkdi/CurIkeO2XMwmvHamOHu2VMQjbcHy2RHRLuuRhFucQPZXTvIaQI1odqiIilrdp7cWCLk8RGrVsUXmn2t3hBt8Mz6MCiPKS/yuGZ8Ooxl8FiMJUbf95yVMc03h5Rjnie90e1mFi5ANj9IsUOO/jqPUPUMq/GR37SGmPtXy8bDAaDwWAwGAyK/AHW9yajz8Fb1QAAAABJRU5ErkJggg=="/>
                                    <div>
                                        <h3>{p['author']}</h3>
                                        <p>{p['date']}</p>
                                    </div>
                                </div>
                                <div>{p['content']}</div>
                                <a href={p['url']}>{"View Resource"}</a>
                                <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 42H10V18H2V42ZM46 20C46 17.79 44.21 16 42 16H29.37L31.28 6.86C31.32 6.66 31.35 6.45 31.35 6.23C31.35 5.4 31.01 4.65 30.47 4.11L28.34 2L15.17 15.17C14.45 15.9 14 16.9 14 18V38C14 40.21 15.79 42 18 42H36C37.66 42 39.08 40.99 39.68 39.56L45.71 25.46C45.89 25 46 24.51 46 24V20.17L45.98 20.15L46 20Z" fill="black"/>
                                    </svg>
                                    <span style={{marginLeft:"10px"}}>5 likes</span>
                                </div>
                            </div>
                        )}
                    </div>
                    </>
                ) 
            }
        </div>
        </>
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
