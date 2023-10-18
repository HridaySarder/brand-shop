import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";


const Register = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        {/* <ToastContainer /> */}
        <h2 className="text-3xl text-center my-10 text-[#039be5] font-bold">
          Please Register
        </h2>

        {/* {registrationStatus.error && (
          <div className="text-red-500 text-center my-4">
            Registration Failed: {registrationStatus.error}
          </div>
        )} */}

        <form  className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder=" Write your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Write your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? Please{" "}
          <Link className="text-[#F75B5F] font-bold" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;