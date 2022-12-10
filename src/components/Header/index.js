import './header.css';
import headerSpiral from '../../assets/header-spiral-white.svg';


function Navbar() {
  return (
    <div className="header">
       <h2 className='header_title'>
        Make more money from 
         <br />
        the products you share
       </h2>
       <p className='header_caption'>
        Put any product, from the 
        <br />
        brands available and
        <br /> 
        earn hefty commissions
        <br />
       </p>
       <div></div>
       <img src={headerSpiral} alt="spiral" className='header_heroimg' />
    </div>
  );
}

export default Navbar;
