// eslint-disable-next-line no-unused-vars
import React from "react"

    const Pet = (props) => {
    return (
        <div id={props.id}>
        <h2>{props.name}</h2>
        <h3>{props.animal}</h3>
        <h3>{props.breed}</h3>
        
        </div>

    )
  };
  
  export default Pet;
  