import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    number: "",
    message: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const fromSubmit = () => {};
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={fromSubmit}>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder='Enter your email address'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone Number
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='number'
                  value={data.number}
                  onChange={InputEvent}
                  placeholder='Enter your phone number'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlTextarea1' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  name='message'
                  value={data.message}
                  onChange={InputEvent}
                  rows='3'
                ></textarea>
              </div>
              <div class='col-12'>
                <button class='btn btn-outline-primary' type='submit'>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
