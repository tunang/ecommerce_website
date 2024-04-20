import panel from "../img/jewelry.jpg"

const JewelrySection = () => {
    return ( <div className="jewelry-section grid">
        <img src={panel} alt="" />
        <div className="content">
            <h1>New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe deserunt, similique corporis eveniet neque odit numquam cupiditate vero vel.</p>
            <button>Check now</button>
        </div>
    </div> );
}
 
export default JewelrySection;