import {db} from "../../scripts/firebase";
import {SLOTS_REQUESTED, SLOTS_RECEIVED,SLOTS_FAILED} from "../type";

export const getSlotTime = () => {
    return dispatch =>{
        dispatch({
            type:SLOTS_REQUESTED
        });
        let data=[];
        db.collection('forum').get().then(querySnapShot => {
            querySnapShot.forEach( doc =>{
                data.push(doc.data());
            })
        }).then(()=>{
            dispatch({type: SLOTS_RECEIVED, payload:data});
        })
        .catch(err => dispatch({
            type:SLOTS_FAILED,
            payload:err
        }))
    }
}