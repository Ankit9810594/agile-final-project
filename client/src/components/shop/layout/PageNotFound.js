import React from "react";
import Layout from "./index";
import "./resell.css"
const PageNotFoundComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <div className="container">
        <div className='wrapper'>
            <div className="image">
                <img src="https://www.bu.edu/files/2020/10/consignment-header.jpg" alt='Sj' title="Store"></img>
            </div>
            <div className="about">
              <div className="book">
                <center><h2 className="topic" style={{fontSize:"30px", fontWeight:"bold"}}>Visit us</h2></center>
                <p>We created the store as Thrift and started out as a small, boutique store in front of our offices in January, 2020. With each passing day customers were visiting, buying, and donating items for us to raise money for our purpose. We quickly grew as our patrons learned more about our mission. In July, 2020 we opened our doors to a bigger location, on West College Street. From there we continued to expand. </p>
                
                </div>
                <div className="boottom">
                  <p><b>Contact No. :</b> 9822430088</p>
                  <p><b>Email:</b> thriftstore174@gmail.com</p>
                </div>
            </div>

        </div>
    </div>

      {/* <span>
        <svg
          className="w-32 h-32 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
        404 not found
      </span> */}
    </div>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
