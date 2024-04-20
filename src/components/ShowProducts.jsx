import { useEffect, useState } from "react";
import fetchProduct from "../services/ProductService";
import ShowProducts_item from "./ShowProducts_item";
import axios from "axios";

const ShowProducts = ({ url, categories }) => {
    const { products } = fetchProduct(`${url}${categories[0]}`);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const datas = await axios.all(
            categories.map(async (category) => {
              const data = await axios.get(`${url}${category}`);
              return data.data.products;
            }),
          );
          setProductsList(datas.flat());
        };
        fetchProducts();
      }, []);

    console.log(productsList)

    return (<div className="grid products-list">
        {productsList && productsList.map((item, index) => {
            return <ShowProducts_item item={item} index={index} />
        })}
    </div>);
}

export default ShowProducts;