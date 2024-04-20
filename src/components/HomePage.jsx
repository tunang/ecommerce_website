import Banner from './Banner';
import NewCollectionSection from './NewCollectionSection';
import JewelrySection from './JewelrySection';
import Category from './Category';

const HomePage = () => {
    return (<div className='home'>
        {/* <h1>Home</h1> */}
        <Banner />

        <NewCollectionSection />

        <JewelrySection />

        <Category />
    </div>);
}

export default HomePage;