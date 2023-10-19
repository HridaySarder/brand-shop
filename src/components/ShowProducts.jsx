import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Card from "./Card";


const ShowProducts = () => {

  const products = useLoaderData();

  

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 sm:grid-cols-1">
        {
          products.map(product => <Card key={product._id} product={product}></Card>
          )
        }
      </div>
    </div>
  );
};

export default ShowProducts;