import React from "react";
import Exam_List3_Movie from "./Exam_List3_Movie";
import classes from './Exam_List3_Movie.module.css';

//--반복되는 Movie 컴포넌트를 분리하기.
const Exam_List3 = () => {

    const movies = [
        {id:0, title : 'movie1', year: 2001, email: "app1@gmail.com"},
        {id:1, title : 'movie2', year: 2002, email: "app2@gmail.com"},
        {id:2, title : 'movie3', year: 2003, email: "app3@gmail.com"},
        {id:3, title : 'movie4', year: 2004, email: "app4@gmail.com"},
        {id:4, title : 'movie5', year: 2005, email: "app5@gmail.com"},
        {id:5, title : 'movie6', year: 2005, email: "app6@gmail.com"},
        {id:6, title : 'movie5', year: 2005, email: "app7@gmail.com"},
    ];

    //--filter 사용시
    // const renderMovies = movies.filter((movie0)=> movie0.title==='movie1' &&  movie0.email==='app2@gmail.com').map((movie) =>{
    const renderMovies = movies.map((movie) =>{
        return (
              <Exam_List3_Movie key={movie.id} movie={movie}/>
        );
    })

    return (

        <div>
            <h1>Movie List</h1>

            <div className={classes.movieContainner1}>
              {renderMovies}
            </div>
        </div>
    );

};

export default Exam_List3;
