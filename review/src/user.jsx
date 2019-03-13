import React from "react";

function User(props) {
    return (
        <div>
            {props.friends.map(friend => (
                <div>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                </div>
            ))}
        </div>
    )
}