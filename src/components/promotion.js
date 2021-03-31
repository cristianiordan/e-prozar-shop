import React from 'react';
import productList from '../productList';


function Promotion(props){
    let randomProduct = Math.floor(Math.random() * productList.length);
    let promotedProduct = productList[randomProduct];
    promotedProduct.newPrice = promotedProduct.price.replace( /^\D+/g, '') / 2;
    
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    const formatedDate = String(day + ' ' + monthNames[month]);
    return(
        <section className="promotion">
                <h2>Don't miss today's hot deal!</h2>

                <div className="card">
                    <div className="card-image">
                        <img src={promotedProduct.image} alt={promotedProduct.name} />
                    </div>
                    <div className="card-body">
                        <h3>{promotedProduct.name}</h3>
                        <p>{promotedProduct.shortDescription}</p>
                        <p className="old-price">{promotedProduct.price}</p>
                        <p>
                            <span>${promotedProduct.newPrice}</span> only on{" "}
                            <span>{formatedDate}</span>
                        </p>
                        <a href="#" className="btn">
                            Buy now
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Promotion;