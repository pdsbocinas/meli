import React from 'react';
import { Link } from 'react-router-dom';
import Shipping from '../Resources/images/shipping.png'


const ItemView = (props) => {
  return(
    <div className="container-product">
      <div className="item__images">
        <img src={props.picture} alt=""/>
      </div>
      <div className="container-item-description">
        <span className="item__price">{props.price}</span>
        { props.free_shipping &&
          <span>
            <img src={Shipping} className="item__shipping" alt="Envío gratis" />
          </span>
        }
        <Link to={`/items/${props.id}`}>
        <h2 className="item__title">
          {props.title}
        </h2>
        </Link>
      </div>
    </div>
  )
}

export default ItemView

