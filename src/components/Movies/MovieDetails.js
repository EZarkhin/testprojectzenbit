import React from 'react'
import './Movie.css'
const movieDetail = (props) =>{
   let image = `https://image.tmdb.org/t/p/w640/${props.image}`
   return <div> 
       <img src={image} alt={image} className='Image'/>
       <p className='Details'> Release date: {props.release}</p>
       <p className='Details'> Runtime: {props.runtime} m.</p>
       <p className='Details'> Overview: {props.overview}</p>
    </div>
}

export default movieDetail;