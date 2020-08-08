import {firebase} from "../../scripts/firebase";
import { AUTH_REQUESTED, AUTH_RECEIVED,AUTH_FAILED} from "../type";

const setAuthorizationHeader = token => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("FBIdToken", `Bearer ${token}`);
    // axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const loginUser = (email,password,history) => {
    return dispatch =>{
        dispatch({
            type:AUTH_REQUESTED
        });
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(data=>{
            const token=data.user.getIdToken();
            // setAuthorizationHeader(token);
            return token;
        })
        .then(token=>{
            setAuthorizationHeader(token);
            dispatch({type:AUTH_RECEIVED});
            // history.push({path:"/employee"});
        })
        .catch(err => {
            dispatch({
            type:AUTH_FAILED
            })
            }
        )
    }
}


