import Swal from "sweetalert2";
import Navbar from "../Home/Navbar";


const AddProducts = () => {

  const handleAddProducts = event => {
    event.preventDefault();
  
    const form = event.target;
  
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
  
  const newProduct = {image,name,brand,type,price,description,rating}
  console.log(newProduct);

  fetch('http://localhost:5000/product',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newProduct)
})
.then(res => res.json())
.then(data => {
  console.log(data);

  if(data.insertedId){
    Swal.fire({
      title: 'Success!',
      text: 'Product added successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }

})
  }

  return (
    <div>
      <Navbar></Navbar>
      
    <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="font-extrabold text-5xl text-center text-[#039be5]">Add a Products</h2>
      <form onSubmit={handleAddProducts}>
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
        <input type="submit" value="Add" className="btn btn-info w-full text-white mt-5" />
      </form>
    </div>
    </div>
  );
};

export default AddProducts;