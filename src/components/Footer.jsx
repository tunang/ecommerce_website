import logo from '../img/logo.png'

const productList = ['T-shirt', 'T-shirt', 'T-shirt'];
const categories = ['Man', 'Woman', 'kids'];
const socialMedia = ['Facebook', 'Instagram', 'Facebook'];
const Footer = () => {
    return ( <div className="footer ">
        <div className="information grid">
            <img src={logo} alt="" />

    
                <ul className="side-infomation" >
                    <h2>Product</h2>
                    {
                        productList.map(product => {
                            return <li>{product}</li>
                        })
                    }
                </ul>

                <ul className="side-infomation">
                    <h2>Categories</h2>
                    {
                        categories.map(category => {
                            return <li>{category}</li>
                        })
                    }
                </ul>

                <ul className="side-infomation">
                    <h2>Social media</h2>
                    {
                        socialMedia.map(social => {
                            return <li>{social}</li>
                        })
                    }
                </ul>
        </div>

        <div className="bottom-footer grid">
            <h3>@2024 Shop</h3>

            <div>
                <p>Terms & Conditions</p>
                <p>Privacy policy</p>
                <p>Cookie Policy</p>
            </div>
        </div>
    </div> );
}
 
export default Footer;