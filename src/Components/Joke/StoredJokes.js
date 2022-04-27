import React from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';
import {RemoveJokeActions} from '../../Store/Actions'

function StoredJokes() {


   const jokes = useSelector(state => state.JokeReducer.jokes);
   console.log("state from use Selector", jokes);
   // this is use Dispatch
   const dispatch = useDispatch();

 
    const RemoveJokeHandler = (id)=>{
        dispatch(RemoveJokeActions(id));
    }

 

    // console.log("props to be stored",props)
    let JokeList = 'No Jokes Available here'
    if(jokes.length>0){
      JokeList = jokes.map(j=>{
         
        return(
            <li 
            key={j.id}
            className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">{j.question?j.question:j.joke}</div>
                {j.answer?j.answer:j.joke}
                <small className='text-muted small'>{j.type} | {j.category}
                </small>
                </div>
                <button 
                onClick={()=>RemoveJokeHandler(j.id)}
                className="badge bg-primary rounded-pill">remove</button>
                <br/>
            </li>   
          );
      })
      
      
    
    }
  return (
    <div>
       <ol className="list-group list-group-numbered">
        {JokeList}
    </ol>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        jokes:state.JokeReducer.jokes
    }
} 

const mapDispatchToProps = ({
    RemoveJokeActions
})



export default StoredJokes;
