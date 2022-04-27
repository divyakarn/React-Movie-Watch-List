import { ADD_SERIES,REMOVE_SERIES } from "../ActionTypes"
export const StoreSeriesAction = (series) =>{
    return {
        type:ADD_SERIES,
        payload:series
    }
}

export const RemoveSeriesActions = (id)=>{
    return{
        type:REMOVE_SERIES,
        payload:id
    }

}