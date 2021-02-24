import React , {useState} from 'react'
import { Rate } from 'antd';




const Rating = ({FilterRating , ratingFilm, rate , setRate}) => {
     // const [value, setValue] = useState(1);

    const handleChange = value => {
         setRate( value );
  }; 

    return (
    
                FilterRating ?
              <span style={{marginLeft:'2%'}}>
                   <Rate onChange={handleChange} value={rate} />
              </span> :
                <span style={{marginLeft:'2%'}}>
                   <Rate value={ratingFilm} disabled />
              </span>
       
    )
}

export default Rating
