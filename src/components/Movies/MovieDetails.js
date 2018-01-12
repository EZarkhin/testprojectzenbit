import React from 'react'
import './Movie.css'
const movieDetail = (props) =>{
   let image = `https://image.tmdb.org/t/p/w640/${props.image}`
   return <div> 
       <img src={image} alt={image} className='Image'/>
       <p className='Details'><b> Release date:</b> {props.release}</p>
       <p className='Details'><b> Runtime:</b> {props.runtime} m.</p>
       <p className='Details'><b> Overview:</b> {props.overview}</p>
    </div>
}

export default movieDetail;