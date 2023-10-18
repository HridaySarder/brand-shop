/* eslint-disable react/prop-types */


const ProductCard = ({cards}) => {

const {brand,image} = cards;

  return (
    <div>
      <div className="card w-96 glass">
  <figure><img className="h-72 w-full" src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-fuchsia-600 text-2xl">{brand}</h2>
   
  </div>
</div>
    </div>
  );
};

export default ProductCard;