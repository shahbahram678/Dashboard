import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className=" text-center">
      <div className="text-4xl font-bold">Page 404</div>
      <p>this page is not present</p>
      <Link className="underline text-blue-700 hover:text-green-700 focus:text-red-700" to="/">Go to Login page</Link>
    </div>
  );
};

export default Page404;
