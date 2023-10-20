
const ExtraPart1 = () => {
  return (
    <div className="bg-black text-white p-20 md:flex items-center justify-between mb-10 rounded-lg">
      <div>
        <h2 className="text-3xl font-bold">Subscribe & Get <span className="text-pink-700">15%</span> Discount</h2>
        <p>Get E-mail updates about out latest shop and special offers.</p>
      </div>
      
  <div className="flex items-center">
    <input type="text" placeholder="Your email…" className="input input-bordered w-full text-black" />
    <button className="btn btn-primary">
      Sign Up
    </button>
  </div>

      
    </div>
  );
};

export default ExtraPart1;