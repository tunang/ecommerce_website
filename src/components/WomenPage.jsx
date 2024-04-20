import ShowProducts from "./ShowProducts";

const WomenPage = () => {
    const categories = ['dresses', 'shoes', 'bags']


    return (<div className="product-page">
        <div className="title-page grid">
            <h1>Women's clothing</h1>
        </div>
        <ShowProducts url={'https://dummyjson.com/products/category/womens-'} categories={categories} />
    </div>);
}

export default WomenPage;