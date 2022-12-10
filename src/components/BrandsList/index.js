import React,{useEffect,useState} from 'react';
import './brandslist.css';
import Tag from '../Tag';
import { getBrands,getTags } from '../../services/brands';
import BrandCard from '../BrandCard';


function BrandsList({currPage}) {

     const [selectedTag, setSelectedTag] = useState('');
     const [brands, setBrands] = useState([]);
     const [tags, setTags] = useState([]);
  

     useEffect(() => {
        getTags().then((data) => setTags(data));
        getBrands(selectedTag,1).then((data) => setBrands(data));
     }, [currPage, selectedTag]);



  return (
    <div className="brands_wrapper">
     <h3 className='brands_title'>Brands with Wishlink</h3>
     <p className='brands_caption'>
     Check out the list of brands to partner with
     <br />
     that will give you more profit.
     </p>
     <div className='brands_categories'>
         <Tag label='All brands' isActive={selectedTag === ''} onClick={()=>{setSelectedTag('')}} />
          {tags.map((tag) => {
            return <Tag key={tag} label={tag} isActive={selectedTag === tag} onClick={()=>{setSelectedTag(tag)}} />
          })}
     </div>
     <div className='brands_cards'>
          {brands.map((brand) => {
            return <BrandCard key={brand.name} brand={brand} />
          })}
     </div>
    </div>
  );
}

export default BrandsList;
