import {ADD_JOKE,REMOVE_JOKE} from '../ActionTypes';

const initState = {
    jokes:[]
};

const JokeReducer = (state= initState, action) =>{
    const DuplicateJokes = [...state.jokes];
    switch(action.type){
       
        case ADD_JOKE:
            DuplicateJokes.push(action.payload);
            return{
               ...state,
               jokes:DuplicateJokes 
            }
        case REMOVE_JOKE:
            return{
                ...state,
                jokes:DuplicateJokes.filter(j=>j.id !== action.payload)
             }

        default: 
         return state;
    }

}

export default JokeReducer