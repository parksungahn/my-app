import React, {useState} from 'react';
import classes from './Temporary.module.css';


const Temporary = () => {

    const[users, setUsers] = useState([
        {id:0, username:"hong_1", useremail:"hong@gmail.com"}
        ,{id:1, username:"hong_2", useremail: "hong_2@gmail.com"}
        ,{id:2, username:"hong_3", useremail: "hong_2@gmail.com"}
        ,{id:3, username:"hong_4", useremail: "hong_2@gmail.com"}
        ,{id:4, username:"hong_5", useremail: "hong_2@gmail.com"}
        ,{id:5, username:"hong_6", useremail: "hong_2@gmail.com"}
        ,{id:6, username:"hong_7", useremail: "hong_2@gmail.com"}
    ]);

    const renderList = users.map(
        items=> {
            return (
                <div kye={items.id}>
                    <div>{items.username}  |  {items.useremail}</div>
                </div>
            );
        }
    );

    return (
        <div className={classes.mainborder}>
            hi sanpark
            {renderList}

        </div>
    );
};

export default Temporary;
