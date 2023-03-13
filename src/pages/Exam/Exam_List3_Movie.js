import React from 'react';
import classes from './Exam_List3_Movie.module.css';


const Exam_List3_Movie = (props) => {

    return (
             <div  className={classes.movieContainner2} >
                 <img className={classes.images} src="/images/Movie1.jpg" alt="Image"/>
                 <div >{props.movie.title}</div>
                 <div >{props.movie.email}</div>
                 <div ><button>구입</button></div>
             </div>
    );


};

export default Exam_List3_Movie;
