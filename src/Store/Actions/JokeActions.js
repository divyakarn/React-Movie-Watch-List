import { ADD_JOKE,REMOVE_JOKE } from "../ActionTypes"
export const StoreJokeAction = (joke) =>{
    return {
        type:ADD_JOKE,
        payload:joke
    }
}

export const RemoveJokeActions = (id)=>{
    return{
        type:REMOVE_JOKE,
        payload:id
    }

}