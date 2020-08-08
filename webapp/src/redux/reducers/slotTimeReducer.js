import {SLOTS_REQUESTED, SLOTS_RECEIVED,SLOTS_FAILED} from "../type";

const initialState = {
    data : [],
    status:""
};

export default function(state=initialState, action) {
    switch(action.type){
        case SLOTS_REQUESTED:
            return {
                ...state,
                status:"waiting"
            };
        case SLOTS_RECEIVED:
            return{
                ...state,
                data:action.payload,
                status:"received"
            };
        case SLOTS_FAILED:
            return{
                ...state,
                status:"failed"
            };
        default:
            return state;
    }
}
