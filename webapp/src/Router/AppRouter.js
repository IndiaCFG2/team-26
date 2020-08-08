// import React from 'react'
// import {Switch,Route} from 'react-router-dom';
// import { connect} from 'react-redux';
// import ProtectedRoute from "./ProtectedRoute.js";
// import {loginUser} from "../redux/actions/authAction";
// import Home from '../pages/Home';
// import EmpData from '../pages/EmpData';
// import Customer from '../pages/Customer';
// import Timeline from "../pages/Timeline"
// import Data from "../pages/Data"
// import HandComplaince from "../components/HandComplaince"
// import Test from "../pages/Test";
// import Login from "../pages/Login";
// import store from "../redux/store"
// import {AUTH_RECEIVED} from '../redux/type'
// import jwtDecode from 'jwt-decode'


// const token= localStorage.FBIdToken
// if(token){
//   const decodedToken = jwtDecode(token)
//   if(decodedToken.exp * 1000 > Date.now()){
//     store.dispatch({type: AUTH_RECEIVED});
//   }
// }

// const AppRouter = ({status,authen}) => {
//     return (
//         <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/employee" status={authen} component={EmpData} />
//             <Route path="/customer" component={HandComplaince} />
//             <Route  path="/coupon" component={Timeline} />
//             <ProtectedRoute status={authen} path="/data" component={Data} />
//             <Route  path="/login" component={Login} />
//             <ProtectedRoute  path="/test" status={authen} component={Test} />
//         </Switch>
//     )
// }

// const mapStateToProps = (state) => ({
//     status:state.auth.status,
//     authen:state.auth.authen
// })

// const mapDispatchToProps = dispatch => {
//     return{
//     }
//   }
  
  
//   export default connect(
//     mapStateToProps,
//     null
//   )(AppRouter);