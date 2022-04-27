import React from 'react';
import { connect,useDispatch} from 'react-redux';
import {StoreSeriesAction} from '../../Store/Actions'

function SeriesList(props) {

    const dispatch = useDispatch();
    let  {
        genres, id, image, language, name, 
        officialSite, premiered, rating, status, 
        summary, type, webChannel
    } = props.series;


    const AddSeriesHandler = ()=>{
        dispatch(StoreSeriesAction(props.series));
    }
  return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={image&&image.medium} height="200" className="img-fluid rounded-start" alt={image&&image.medium}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                {summary && summary.substring(0,150).replace(/<[^>]+>/g, " ")}...
                </p>
                <p className="card-text">
                <small className="text-muted">
                [{genres && genres.map(g=> g+" ")}] on {webChannel? webChannel.name :'....'}  <br/>
                Rating:{ rating && Math.round(rating.average)}
                </small>
                </p>
                <a 
                rel='noreferrer'
                href={officialSite}  
                target = "_blank" className='btn btn-sm btn-primary'> Explore more</a>
                &nbsp;
                <button onClick={AddSeriesHandler} className="btn btn-primary btn-sm"> Add To WatchList</button>
            </div>
            </div>
        </div>
        </div>
  )
}
// const mapDispatchToProps = ({
//     StoreSeriesAction
// });

export default SeriesList;
