import './brandcard.css';

function BrandCard({brand}) {
  return (
    <div className="brand_card" style={{backgroundColor: brand['theme color']}}>
      <div className="">
         <img src={brand.logo} alt={brand.name} className="brand_card_img" />
        </div>
        <div className="brand_card_name">
            <h4>{brand.name.toUpperCase()}</h4>
        </div>
        <div className="brand_card_info">
          FLAT 15%
        </div>
    </div>
    );
}

export default BrandCard;