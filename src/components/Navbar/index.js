import './navbar.css';
import arrowLeft from '../../assets/arrow-left.svg';


function Navbar() {
  return (
    <div className="navbar">
       <img src={arrowLeft} alt="arrow left" />
       <p className='title'>Brands</p>
    </div>
  );
}

export default Navbar;
