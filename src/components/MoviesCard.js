import React from 'react'
import { Card } from "react-bootstrap";
import AddMovie from './AddMovie';
import Rating from "./Rating";

const MoviesCard = ({movie, addCard, addMovie}) => {
    return (
        <div>
            { addCard ?
                        <Card style={{width:"15rem", height:"100%", color:"white",backgroundColor:"black", margin:"1%" , border : "1px solid white" , padding:"3%" }}>
                             <Card.Body>
                              <Card.Title style={{margin:"90% 0" ,fontSize:"40px"}}> 
                                    <AddMovie addMovie={addMovie} />
                               </Card.Title>
                            </Card.Body>
                        </Card> :

                           <Card style={{width:"15rem", height:"90%", color:"white",backgroundColor:"black", margin:"1%" , border : "1px solid white" , padding:"3%" }}>
                         <Card.Img style={{height:"70%"}}  variant="top" src={movie.img} />
                            <Card.Body>
                              <Card.Title> {movie.title} </Card.Title>
                               <Card.Text>
                                       <Rating FilterRating={false} ratingFilm={movie.rating} />
                               </Card.Text>
                            </Card.Body>
                        </Card>
                }
                        
        </div>
    )
}

export default MoviesCard
