import Navbar from "../Home/Navbar";


const AddProducts = () => {
  return (
    <div>
      <Navbar></Navbar>
      
    <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="font-extrabold text-5xl text-center">Add a Products</h2>
      <form>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Image</span>
            <label className="input-group">
              
              <input
                type="text"
                name="image"
                placeholder="Image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Name</span>
            <label className="input-group">
              
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Brand Name</span>
            <label className="input-group">
              
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Type</span>
            <label className="input-group">
              
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Price</span>
            <label className="input-group">
              
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Short Description</span>
            <label className="input-group">
              
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="">
          <div className="form-control md:w-full">
            <label className="label">
             
            </label>
            <span>Rating</span>
            <label className="input-group">
              
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
         
        </div>
        <input type="submit" value="Add" className="btn btn-block mt-5" />
      </form>
    </div>
    </div>
  );
};

export default AddProducts;