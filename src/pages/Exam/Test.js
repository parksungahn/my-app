import React from 'react';
import Test_Movie from "./Test_Movie";

const Test = () => {

    const movies = [
        {id: 0, title: 'movie1', year: 2001},
        {id: 1, title: 'movie2', year: 2002},
        {id: 2, title: 'movie3', year: 2003},
        {id: 3, title: 'movie4', year: 2004},
    ];

    const renderMoview = movies.map((movie) => {
        return (
            <Test_Movie key={movie.id} movie={movie}/>
        );
    });


    return(
        <div >
            {renderMoview}
        </div>
    );
};

export default Test;
