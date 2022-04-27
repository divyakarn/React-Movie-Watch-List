import React, { useState } from 'react';
import SeriesList from './SeriesList';
import axios from 'axios';

function Series() {

    const [series,setSeries] = useState([]);


  const SearchSeriesHandler = (e)=>{
      e.preventDefault();
      //console.log(e.target[0].value );
      GetSeries(e.target[0].value);
  }

  const GetSeries = (title) => {
    // shows?q=lucifer
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${title}`)
      .then((response) => {
         // console.log(response);
        let SeriesObj = response.data.map(s => {
            let  {
                genres, id, image, language, name, 
                officialSite, premiered, rating, status, 
                summary, type, webChannel
            } = s.show;
            let tempS = {
                genres, id, image, language, name, officialSite, premiered, rating, status, summary, type, webChannel
            }
            return tempS;
        });
        setSeries(SeriesObj);
      })
      .catch((err) => console.log(err));
  };




  return (
    <div className='container mt-5 p-5'>
       <form onSubmit={SearchSeriesHandler} className="row g-3 align-items-center">
        <div className="col-auto">
            <input 
            type="text"  
            className="form-control" 
            aria-describedby="passwordHelpInline"/>
        </div>
    <div className="col-auto">
        <button type ="submit" className='btn btn-primary'>Search WebSeries</button>
    </div>
    </form>
    <hr />
    <>
    {
        series.length >0?
         series.map(s => 
            <SeriesList key= {s.id} series= {s}/>):
            'Search to get WebSeries'

    }
    
    </>
   

    </div>
  )
}

export default Series;
