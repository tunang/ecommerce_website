import img1 from '../img/man.jpeg'
import img2 from '../img/man.jpeg'
import img3 from '../img/man.jpeg'



const Category = () => {

    const ImgUrls = [img1, img2, img3];

    return ( <div className="category grid">
        {ImgUrls.map((ImgUrl, index) => {
            return <div className="category-item" key={index}>
                <img src={ImgUrl} alt="" />
                <div className='content'>
                    <h1>Man</h1>
                    <button>See detail</button>
                </div>
            </div>
        })}
    </div> );
}
 
export default Category;