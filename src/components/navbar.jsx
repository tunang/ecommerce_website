import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
const NavBar = () => {

    const { logout, user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate("/");
        console.log('logout success')
        
    }

    const backHome = () => {
        navigate("/")
    }

    return ( <nav className='grid'>
        <div className="left-nav">
            <Link to='/men'>Men</Link>
            <Link to='/women'>Women</Link>
            <Link>Kid</Link>
        </div>
        
        
        <img onClick={backHome} src={logo} alt="" />   
        

        <div className="right-nav">
            

            <Link><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
            <Link><FontAwesomeIcon icon={faCartShopping} /></Link>
           
            {
                user && user.auth === true
                ? <Link onClick={() => handleLogout()}>Log out</Link>
                : <Link to='/login'>Login</Link>
            }
            
        </div>
    </nav> );
}
 
export default NavBar;