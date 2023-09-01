import React from "react";
import Cards from "./Cards";
import Showdata from "./Showdata";

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>

      <div className='container-fluid service_div'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {Showdata.map((val, ind) => {
                return <Cards key={val.id} imgs={val.imgs} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
