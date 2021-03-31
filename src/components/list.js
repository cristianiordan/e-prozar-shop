import React from 'react';
import productList from '../productList';
import Card from './card'

function List(props){
    return (
        <section className='products'>
            {productList.map(product =>
            <Card 
                key = {product.id} 
                data = {product} 
            />
        )}
        </section>
    )
}

export default List;