import React from 'react';
import { Link } from 'react-router-dom';

const ItemView = (props) => {
  return(
  <div className="item-container">
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <img src={props.picture} alt=""/>
    </div>
    <Link to={`/items/${props.id}`}>
      <span className="item-title">
        {props.title}
      </span>
    </Link>
  </div>
  )
}

export default ItemView

