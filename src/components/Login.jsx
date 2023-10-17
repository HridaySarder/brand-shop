import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
const {createUser} = useContext(AuthContext)
const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password);
  createUser(email,password)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
}

  return (
    <div>
    <Navbar></Navbar>
    <div>
      <h2 className="text-3xl text-center my-10 text-[#039be5] font-bold">
        Please login
      </h2>

      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Write your email"
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
            Login
          </button>
        </div>
      </form>
      <p className="text-center mt-4">
        Do not have an account? Please{" "}
        <Link className="text-[#F75B5F] font-bold" to={"/register"}>
          Register
        </Link>
      </p>
      {/* <p className="text-center"><span className="font-bold">Sign in With</span> <br />
        <button onClick={handleGoogleSignIn} className="">
          <FcGoogle className="text-4xl"></FcGoogle>
        </button>
      </p> */}
    </div>
  </div>
  );
};

export default Login;