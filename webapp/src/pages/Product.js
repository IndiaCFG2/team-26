import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux';
import {getSlotTime} from "../redux/actions/slotTimeAction1"
import "../styles/Community.scss";

function Home({data,status,getSlotTime}) {
    const [tag,setTag]=useState(0);
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        getSlotTime();
        console.log(data);
    });
    useEffect(() => {
        setPosts(data[tag]);
    }, [tag,data])
    return (
        <div className="container">
            <h1 style={{margin:"20px 0"}}></h1>
            {
                data.length===0 ? <div>Loading</div> :
                (   <>
                    <div className="tags">
                        {
                            data.map((topic,i) => <div onClick={()=>setTag(i)} tabIndex="0" style={{cursor:"pointer"}}>{topic['name']}</div>)
                        }
                    </div>
                    <div>
                        {posts.map(p=>
                            <div className="posts">
                                <div style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                                    <img alt="profile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAZlBMVEX///8AAAD29vaurq77+/vQ0NCioqIxMTHn5+fLy8vu7u7r6+tfX19aWlrj4+O8vLw6OjpQUFDd3d0/Pz9/f3+cnJxpaWkICAiVlZV4eHgoKCiOjo7X19cQEBC0tLQVFRVISEgfHx/8OVbkAAADu0lEQVR4nO2a2ZajIBCG2wUQjQtxSTSJy/u/5LQNLklHsdGiz8zwXSZ18JdaKMCPD4PBYDAYDAaDwWAwGP53bB/VGOcY18i3f01FhAvSWJyGhHn0KyrqxHolcVzNIty4/aaip421uscv3qroKQJ9MuLLooxPal0yrvOndgljLOnmP121yyAZPfcBYZ9pRjQLGWU8CvT0ByovGoU4w7NC+pqkLg2HPx1oGd6YF+9KhTvmkQcrw24lLzxMVwtbR7B03gchGFKGL2p5tmKTcZMEsp6JXAlXjULwnHEr/ojzqtWZG1Vwax6Ve6VHeAZJzNQp+QN8iZnPzUooGSJKC6khryKJTK8q3tZa6cDWsprHn3x4j8dzDKTjxiulfLp9XnVvQDpOywvLM2KZkQeSGuGmrO3JNpQ7ddjm2eYeZP+4jtPm8sQL3glIBx89lHcWdghaUPOv0Yl8QQ8IaAty/xq9oVJDyne9dyAdgbUxUHmYWlCdkMsDlUgNeVk/gTUgojuVrRuxBRoeY2Mh6cWHnh5q2f8YKojkTcWsQVWPHvrgz1hLGdE8PuRppc6wXyPLPYjoPbYsyzvgJeRz6VjKyYAJC6jiIRi2a9X7bhyJ2YDfaItQtS7O96yx6+HkATJIOV4qHmUVr5FIB41WCrzd74lGIVZaTzu78+wcM9VykjoTYnWsxDGNcck6S7OMT9eE1hqhBqcI8IqMXOeZMlqaEga3u36LG1dvVHRQW7g1aJY+nSsnN8glZQ2fOhlL0yRNWeZQjQfrb7A5v6rBYDD8bbh2gGKcX3tyHKPA1n1r2oOuRdrN6/qlS4ur3vXl7hBrCeLctUyLG9WsWVTR07R1BC7lXC5PxURVrl9J7IWud4RzQrgmIPp+m96QtGWMtSn57qsCqF2+vkhoyxrdPb7i294d1WX7IgbiSip+igt2o+9aDpve2NwsOTyPs9mrkgwt9z02us0UN1tOwbfjnaahH1h6H4Ufk/npwHYxnsatts30zIuXw3xTTx7Jt75dkE9KDvogZJIR/qQ6RVOtOeQw5DZO8E+Hq0d3HnAzNW5lk5+XpelkYPdZ6ugUpbifvmfaGSPx3pkdi/CurIkeO2XMwmvHamOHu2VMQjbcHy2RHRLuuRhFucQPZXTvIaQI1odqiIilrdp7cWCLk8RGrVsUXmn2t3hBt8Mz6MCiPKS/yuGZ8Ooxl8FiMJUbf95yVMc03h5Rjnie90e1mFi5ANj9IsUOO/jqPUPUMq/GR37SGmPtXy8bDAaDwWAwGAyK/AHW9yajz8Fb1QAAAABJRU5ErkJggg=="/>
                                    <div>
                                        <h3>{p['fponame']}</h3>
                                        <p>{p['name']}</p>
                                        <p>{p['price']}</p>
                                        <p>{p['qty']}</p>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    </>
                ) 
            }
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
