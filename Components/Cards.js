import React from "react";

const Card = props => {
    return (
        <div className="cards">
            <p>{props.userData.name}</p>
        </div>
    )

}

export default Card;