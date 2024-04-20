import panel from '../img/banner.jpg'



const Banner = () => {
    return (
        <div className='banner grid'>
            <img src={panel} alt="" />
            <h1>NEW COLLECTION</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex tortor, laoreet ac efficitur id, sodales eget neque. Ut mollis.</p>
            <button>Buy Now</button>
        </div>
    );
}

export default Banner;