import {ADD_SERIES,REMOVE_SERIES} from '../ActionTypes';

const initState = {
    series:[]
};

const SeriesReducer = (state= initState, action) =>{
    const DuplicateSeries = [...state.series];
    switch(action.type){
       
        case ADD_SERIES:
             DuplicateSeries.push(action.payload);
            return{
               ...state,
               series:DuplicateSeries 
            }
        case REMOVE_SERIES:
            return{
                ...state,
                series:DuplicateSeries.filter(s=>s.id !== action.payload)
             }

        default: 
         return state;
    }

}

export default SeriesReducer