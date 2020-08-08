import {db} from "../../scripts/firebase";
import {SLOTS_REQUESTED, SLOTS_RECEIVED,SLOTS_FAILED} from "../type";

export const getFPO = () => {
    return dispatch =>{
        dispatch({
            type:SLOTS_REQUESTED
        });
        let data=[];
        db.collection('fpo').get().then(querySnapShot => {
            querySnapShot.forEach( doc =>{
                data.push({
                    name:doc.id,
                    data:doc.data()
                });
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