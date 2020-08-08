import {db} from "../../scripts/firebase";
import {SLOTS_REQUESTED, SLOTS_RECEIVED,SLOTS_FAILED} from "../type";

export const getSlotTime = () => {
    return dispatch =>{
        dispatch({
            type:SLOTS_REQUESTED
        });
        let data=[];
        db.collection('products').doc('1pflD9HAZUFp5Aro5A1G').get().then(doc => {
            if(doc.exists){
                data=doc.data();
                console.log(data);
            }
        }).then(()=>{
            dispatch({type: SLOTS_RECEIVED, payload:data});
        })
        .catch(err => dispatch({
            type:SLOTS_FAILED,
            payload:err
        }))
    }
}