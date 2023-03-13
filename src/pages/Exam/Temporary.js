import React from 'react';


const Temporary = () => {

    const movies = [
        {id: 0, title: 'title1', year: 2001},
        {id: 1, title: 'title2', year: 2002},
        {id: 2, title: 'title3', year: 2003},
    ];

    const renderMovie = movies.map(movie_item => {
        return (
            <div className="movie" key={movie_item.id}>
                <div className="movie-title">{movie_item.title}</div>
                <div className="movie-year">{movie_item.year}</div>
            </div>
        );
    });


    const renderMovie2 = movies.map(
        item => {
            return (
                <div className="movie" key={item.id}>
                    <div className="movie-title">{item.title}</div>
                    <div className="movie-year">{item.year}</div>
                </div>
            );
        }
    );

    return (
        <div>
            <h1>Movie List</h1>

            {renderMovie2}

        </div>
    );
};

export default Temporary;
