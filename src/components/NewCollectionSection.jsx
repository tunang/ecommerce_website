import { useEffect, useState } from "react";
import fetchProduct from '../services/ProductService'
import ShowProducts_item from "./ShowProducts_item";
     
const NewCollectionSection = () => {
    const {products: newProducts, error, loading} = fetchProduct('https://dummyjson.com/products/category/mens-shirts?limit=3');

    console.log(newProducts.products);

    return ( <div className="new-collection-section grid">
        <div className="content">
            <h1>New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe deserunt, similique corporis eveniet neque odit numquam cupiditate vero vel.</p>
        </div>

        <div className="listItem grid">
            {loading ? <h1>Loading...</h1> : null}
            {newProducts.products && newProducts.products.map( (item, index) => {
                   return <ShowProducts_item  item={item} index={index} /> 
            })}
        </div>
    </div> );
}
 
export default NewCollectionSection;