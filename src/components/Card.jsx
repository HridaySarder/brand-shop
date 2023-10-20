/* eslint-disable react/prop-types */
import { FcRating } from 'react-icons/fc'

const Card = ({product}) => {

  const {image,name,brand,type,price,description,rating} = product;

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img className="h-64 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
   
    <p>{type}</p>
    <p className='text-xl text-violet-600'>Brand: {brand}</p>
    <p>{description}</p>
    <div className="flex justify-around">
    <p className='font-bold'>Price:${price}</p>
    <p className='flex items-center font-bold'>Rating: {rating}<FcRating></FcRating></p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Details</button>
    </div>
  </div>
</div>
  );
};

export default Card;