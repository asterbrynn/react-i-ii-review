import React from "react";

export default function User(props) {
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