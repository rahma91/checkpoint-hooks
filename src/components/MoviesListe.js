import React from 'react'
import { MoviesData } from './MoviesData'
import  MoviesCard  from "./MoviesCard";

const MoviesListe = ({movies,recherche, rate,addMovie}) => {

    return (

        <div  style={{ display:"flex" , justifyContent:"space-around", flexWrap:"wrap", padding:"1%", width:"900px"}} >
            { movies
            .filter(movie =>
                movie.title.toLowerCase().includes(recherche.toLowerCase())
                &&
               ( movie.rating >= rate)
            )
            .map(movie =>
                <MoviesCard movie={movie} key={movie.id} />
            )
            }
            <MoviesCard addCard={true} addMovie={addMovie}  />
        </div>
    )
}

export default MoviesListe
