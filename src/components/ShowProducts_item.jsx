import { Navigate, useNavigate } from "react-router-dom";

const ShowProducts_item = ({item, index}) => {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/products/${item.id}`);
    }
    
    return ( 
        <div onClick={() => handleClick()} className="product-item" key={`product-${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                    <h2>{item.title}</h2>
                    {/* <p>{item.description}</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad ea magnam!</p>
                    <h1>{item.price}$</h1>
                </div>
    );
}
 
export default ShowProducts_item;