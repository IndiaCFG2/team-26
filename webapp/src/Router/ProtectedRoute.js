// import React from 'react';
// import { connect} from 'react-redux';
// import {Route, Redirect} from 'react-router-dom';

// const ProtectedRoute = ({
//     component: Component,
//     status,
//     ...rest
//   }) => (
//     <Route
//       {...rest}
//       render={props =>
//         status===true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//             }}
//           />
//         )
//       }
//     />
//   );

//   const mapStateToProps = (state) => ({
//     auth:state.auth.status
// })

  
//   export default connect(
//     mapStateToProps,
//     null
//   )(ProtectedRoute);