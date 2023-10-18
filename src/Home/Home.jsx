import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "../components/ProductCard";


const Home = () => {

const cards = useLoaderData()

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <h2 className="text-center text-5xl font-bold text-emerald-500 mb-10">Types of Brand</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mb-10">
        {
          cards.map(card => <ProductCard key={card.id} cards={card}></ProductCard>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;