import { AUTH_REQUESTED, AUTH_RECEIVED, AUTH_FAILED} from "../type";

const initialState = {
    authen:false,
    status:"dft"
};

export default function(state=initialState, action) {
    switch(action.type){
        case AUTH_REQUESTED:
            return {
                ...state,
                status:"waiting"
            };
        case AUTH_RECEIVED:
            return{
                ...state,
                authen:true,
                status:"received"
            };
        case AUTH_FAILED:
            return{
                ...state,
                status:"failed"
            };
        default:
            return {
                ...state,
                status:"err"
            };
    }
}
