import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../constants";

export default function DetailsBlog() {
  const { id } = useParams();

  const blog = blogs?.find((b) => b.id == id);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-5 mt-10">
        {blog?.title}
      </h1>
      <div className="max-w-xs sm:max-w-sm lg:min-w-[700px] lg:max-w-[700px] mx-auto py-5">
        <img src={blog?.image} className="w-full" alt="" />
      </div>
      {/* <div className="flex justify-center items-center py-3 w-1/2 ">
        <h1 className="border-[2px] border-black w-fit px-1 rounded-md bg-[rgb(99,231,99)] text-[19px]">
          {"category"}
        </h1>
      </div> */}
      <div className="py-16 px-16">
        <p>{blog?.description}</p>
      </div>
      <div className="flex flex-col items-end pb-3 pr-9">
        <h1 className="text-[23px]">Mridul Das</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="flex justify-center">
        <Link to={`/`}>
          <span className="px-6 py-2 bg-white text-black text-lg font-semibold rounded cursor-pointer">
            Back to home page
          </span>
        </Link>
      </div>
    </div>
  );
}
