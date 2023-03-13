import React from "react";


const Exam_List = () => {

    const movies = [
        {title : 'movie1', year: 2001},
        {title : 'movie2', year: 2002},
        {title : 'movie3', year: 2003},
    ];

    return (

        <div>
            <h1>Movie List</h1>
            <div className="movie">
                <div className="movie-title">{movies[0].title}</div>
                <div className="movie-year">{movies[0].year}</div>
            </div>

            <div className="movie">
                <div className="movie-title">{movies[1].title}</div>
                <div className="movie-year">{movies[1].year}</div>
            </div>
        </div>
    );

};

export default Exam_List;
