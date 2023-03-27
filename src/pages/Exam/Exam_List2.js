import React from "react";
import classes from './Exam_List2_Movie.module.css';
import {v4 as uuid} from "uuid";

//--반복문 변수로 빼기.
const Exam_List2 = () => {

    const movies = [
        {id: 0, title: 'movie1', year: 2001},
        {id: 1, title: 'movie2', year: 2002},
        {id: 2, title: 'movie3', year: 2003},
        {id: 3, title: 'movie3', year: 2003},
        {id: 4, title: 'movie3', year: 2003},
        {id: 5, title: 'movie3', year: 2003},
        {id: 6, title: 'movie3', year: 2003},
    ];

    //--map 돌릴때만 key 필요함.
    const renderMovies = movies.map(movie_item => {
        return (
                <div key={uuid()} className={classes.movieContainner2} >
                    <div className={classes.movieTitle}>{movie_item.title}</div>
                    <div className={classes.movieYear}>{movie_item.year}</div>
                </div>
               );
    })

    return (

        <div>
            <h1>Movie List</h1>
            <div className={classes.movieContainner1} >
            {renderMovies}
            </div>
        </div>
    );

};

export default Exam_List2;
