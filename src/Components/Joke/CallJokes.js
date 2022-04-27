import React, { useEffect, useState } from 'react';
import { connect,useSelector} from 'react-redux';
import {StoreJokeAction} from '../../Store/Actions';




function CallJokes(props) {

    const [joke,setjoke] = useState(null);
    //UseSelector Hook
    const jokes = useSelector(state =>state.JokeReducer.jokes);

  
    
    const AddJokeHandler = ()=>{
        // console.log(joke);
        // console.log(props.state.JokeReducer.jokes)
        let flag = false;
        if(jokes.length >0 ){
          jokes.forEach(j=>{
              if(j.id == joke.id){
                  flag = true;
              }
          })
          if(flag == true){
              alert ("You have Already stored the joke buddy");
          }else{
            props.StoreJokeAction(joke);
          }
              
        }else{
            props.StoreJokeAction(joke);
        }
        
    }

    const getJoke = ()=>{
        fetch(
            "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single%2Ctwopart&format=json&idRange=0-303&blacklistFlags=nsfw%2Cracist",
            {
              method: "GET",
              headers: {
                "x-rapidapi-key":
                "44b43c5199msh40ab10a323331cap13ad60jsn9319419a751e",
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
              },
            }
            )
            .then((response) => response.json())
            .then((readable) =>  {
                // console.log(readable);
                const jokeobj = {};
                jokeobj.id = readable.id;
                jokeobj.type = readable.type;
                jokeobj.category = readable.category;
                if(readable.type === "twopart"){
                        jokeobj.question = readable.setup; 
                        jokeobj.answer = readable.delivery; 
                } else if(readable.type === "single") {
                    jokeobj.joke = readable.joke;
                }
                setjoke(jokeobj);
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
       getJoke();
    },[]);

    // console.log("this is joke",joke);
  
  let Joke = "loading...";

  if(joke){
    Joke = (
        <div className="card">
        <div className="card-header">
            {joke.type} | {joke.category}
        </div>
        <div className="card-body">
            <h5 className="card-title">{joke.question?joke.question:joke.joke}</h5>
            <p className="card-text">{joke.answer?joke.answer:joke.joke}</p>
            <button onClick={AddJokeHandler} className="btn btn-primary">Store Joke</button>
            &nbsp;
            <button onClick={getJoke} className="btn btn-primary ">Refresh Joke</button>
        </div>
        </div>
    )
  }
  return Joke;
  
}
const mapDispatchToProps = ({
    StoreJokeAction
});
// const mapStateToProps = state =>{
//     // console.log("thi is state",state);
//     return ({
//        state
//     })
// }

export default  connect(null,mapDispatchToProps)(CallJokes);
