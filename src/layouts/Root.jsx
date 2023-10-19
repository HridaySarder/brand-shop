import { Outlet } from "react-router-dom";


const Root = () => {
  return (
   <div className="">
     <div className="max-w-[1400px] mx-auto">
    <Outlet></Outlet>
    
  </div>
   </div>
  );
};

export default Root;