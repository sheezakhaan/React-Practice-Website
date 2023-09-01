import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <img src={props.imgsrc} className='img-fluid' />
                <h1>
                  {props.name}
                  <br />
                  <strong className='brand_name'> Mad Media</strong>
                </h1>
                <h2 className='my-3'>We are a team of talented developers</h2>
                <div className='mt-3'>
                  <NavLink to={props.to} className='btn-get-started'>
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
