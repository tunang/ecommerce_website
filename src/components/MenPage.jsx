import ShowProducts from "./ShowProducts";

const MenPage = () => {
    const categories = ['shirts', 'shoes', 'watches'];

    return ( <div className="product-page">
        <div className="title-page grid">
            <h1>Men's clothing</h1>
        </div>
        <ShowProducts url={'https://dummyjson.com/products/category/mens-'} categories={categories}/>
    </div> );
}
 
export default MenPage;