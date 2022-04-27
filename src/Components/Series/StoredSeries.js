import React from 'react';
import {connect,useSelector,useDispatch} from 'react-redux';
import {RemoveSeriesActions} from '../../Store/Actions'

function StoredSeries(props) {

//    console.log(props.jokes)


    const series = useSelector(state=>state.SeriesReducer.series);

    const dispatch = useDispatch();
    const RemoveSeriesHandler = (id)=>{
         dispatch(RemoveSeriesActions(id));
        //console.log(id);
    }

 

    //  console.log("props to be stored",props)
    let SeriesList = 'No WebSeries Added to WatchList'
    if(series.length>0){
      SeriesList = series.map(s=>{
         
        return(
            <li 
            key={s.id}
            className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto d-flex justify-content-center align-items-center">
                   
                   <img src={s.image && s.image.medium} 
                   height= {150}
                   alt={s.image && s.image.medium}  />
                    <span className='p-2'>
                            <div className="fw-bold">{s.name}</div>
                            {
                                s.summary && s.summary.substring(0,150).replace(/<[^>]+>/g, " ")
                            }...
                            <br />
                            <br />
                            <a 
                            rel='noreferrer'
                            href={s.officialSite}  
                            target = "_blank" className='btn bg-primary btn-primary rounded-pill'> Explore more</a> 
                            &nbsp;
                            <button 
                             onClick={()=>RemoveSeriesHandler(s.id)}
                            className="btn btn-primary bg-primary rounded-pill">remove</button>
                    <br/>
                    </span>
                    
                </div>
                
            </li>   
          );
      })
      
      
    
    }
  return (
    <div>
       <ol className="container mt-5 p-5 list-group list-group-numbered">
        {SeriesList}
    </ol>
    </div>
  )
}

// const mapStateToProps = state =>{
//     return{
//         series:state.SeriesReducer.series
//     }
// } 

// const mapDispatchToProps = ({
//     RemoveSeriesActions
// })



export default StoredSeries;
