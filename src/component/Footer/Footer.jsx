import React from 'react'
import style from './Footer.module.css'

export default function Footer() {


  return <> 

{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className=" ">

  <footer className="text-white text-center text-lg-start bg-main">
    {/* <!-- Grid container --> */}
    <div className="container p-2">
      {/* <!--Grid row--> */}
      <div className="row mt-4">
        {/* <!--Grid column--> */}
        <div className="col-lg-6   col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <div className="mt-5">
            {/* <!-- Facebook --> */}
            <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-facebook-f"></i></a>
            {/* <!-- Dribbble --> */}
            <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-dribbble"></i></a>
            {/* <!-- Twitter --> */}
            <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-twitter"></i></a>
            {/* <!-- Google + --> */}
            <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-google-plus-g"></i></a>
            
          </div>
        </div>
       
        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='search' />
            <label className="form-label" for="formControlLg"></label>
            <button className='btn bg-light text-bg-light'>search</button>
          </div>

          <ul className="fa-ul" >
            <li className="mb-4">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3" >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>

</div>
{/* <!-- End of .container --> */}
  </>
}