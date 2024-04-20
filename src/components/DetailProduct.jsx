
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchProduct from "../services/ProductService";

const DetailProduct = () => {
    const {id} = useParams();
    const {products: product} = fetchProduct(`https://dummyjson.com/products/${id}`);
    const [total, setTotal] = useState(1);

    console.log(product);
    return ( <div className="product-detail grid">
        <img src={product.thumbnail} alt="" />

        <div className='product-infomation'>
            <p className="product-name">{product.title}</p>
            <p className="product-price">{product.price}$</p>


        </div>
    </div> );
}
 
export default DetailProduct;