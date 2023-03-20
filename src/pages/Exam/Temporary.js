import React from 'react';

const Temporary = () => {

    const users = [
        {id: 0, username: "hong1", useremail: "hong1@gmail.com"},
        {id: 1, username: "hong2", useremail: "hong2@gmail.com"},
        {id: 2, username: "hong3", useremail: "hong3@gmail.com"},
        {id: 3, username: "hong4", useremail: "hong4@gmail.com"},
        {id: 4, username: "hong5", useremail: "hong5@gmail.com"},
    ];

    const renderList = users.map(
        item => {

            return (
                <div key={item.id}>
                    <div>{item.id} | {item.username} | {item.useremail}</div>
                </div>
            );
        }
    );

    return (
        <div>

            {renderList}
        </div>
    );
};

export default Temporary;
