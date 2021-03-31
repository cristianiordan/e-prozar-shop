import React from 'react';

function Card(props){
    return(
        <div className='card'>
            <div className='card-image'>
                <img src={props.data.image} alt={props.data.name}/>
            </div>
            <div className='card-body'>
                <h3>{props.data.name}</h3>
                <p>{props.data.category}</p>
                <p>{props.data.shortDescription}</p>
                <p>{props.data.description}</p>
                <p className='price'>{props.data.price}</p>
                <a href="#" className="btn">
                            Buy now
                </a>
            </div>
        </div>
    )
}

export default Card;