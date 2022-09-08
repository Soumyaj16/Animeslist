import {Link} from 'react-router-dom'
import cartoon from './images/cartoon.png'
const Navbar = () => {
    return ( 
        <nav className='s1'>
            <img src={cartoon} width="50px" height="100px"/>
            <div className='s2'>
        
           <input type="search"/><button>search</button>
           </div>
           <div className='s3'>
            <Link to="/wishlist">wishlist</Link>
            </div>
    

        </nav>
    );
}
 
export default Navbar;