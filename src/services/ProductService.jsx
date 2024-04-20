import { useState, useEffect } from "react";
import axios from 'axios';

const fetchProduct = (url) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    

    function getProduct(){
        try{
            setLoading(true);
            axios.get(url)
            .then((respond) => {
                setProducts(respond.data);
            })
            setLoading(false);
        }
        catch{
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    },[url])
    

    console.log()
    return { products, error, loading };
}
 
export default fetchProduct;