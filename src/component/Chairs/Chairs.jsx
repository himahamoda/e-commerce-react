import React from 'react'
import style from './Chairs.module.css'
import image from '../../Assets/Image Left.png'
import image2 from '../../Assets/large2.png'
import image3 from '../../Assets/chair1.png'
import image4 from '../../Assets/chair2.png'
import image5 from '../../Assets/Image1.png'
import image6 from '../../Assets/Image Block.png'
import chair1 from '../../Assets/blackchair.png'
import chair2 from '../../Assets/Mid-Century Modern Sale at the Foundary.png'
import chair3 from '../../Assets/Haute House Bright Tiffany Damask Chair.png'
export default function Chairs() {


  return <>
    <div className="container mt-5">
      <div className="row" >
        <div className="col-md-5 ">
          <img src={image} height={600} className='w-100' alt="" />
        </div>
        <div className="col-md-7">
          <h1 className=' mb-4'>The Dandy Chair</h1>
          <span className=''>£280</span>
          <h2 className=' fw-medium pt-5'>Product description</h2>
          <p className='font '>A timeless design, with premium materials features as one of our most popular and iconic pieces.
            The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>


          <table class="table table-active mt-5">
            <thead>
              <tr>
                <th scope="col">Hight</th>
                <th scope="col">Width</th>
                <th scope="col">Depth</th>
                <th scope="col">color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100cm</td>
                <td>75cm</td>
                <td>50cm</td>
                <td>black</td>
              </tr>

            </tbody>
          </table>


          <div className="row pt-4 ">
            <div className="col-md-8 pt-5 ">
              <h1 className='h5 mt-3' >Quintity</h1>
              <div className="">
                <button className=' btn-sm border me-1'>+</button>
                <span>1</span>
                <button className=' btn-sm border ms-1'>-</button>
              </div>
            </div>
            <div className="col-md-2 pt-5 p-2 ">
              <button className='btn bg-main text-white '> add cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section2 */}
    <div className="container py-5 ">
      <h1 className='font fw-bold'>You might also love these !</h1>
      <div className="row ">
        <div className="col-md-6 product">
          <img src={image2} height={400} className='w-100' alt="" />
          <h2 className='h6'>The Poplar suede sofa</h2>
          <span>£980</span>
        </div>
        <div className="col-md-3 ps-2 product ">
          <img src={image3} height={400} className='w-100'   alt="" />
          <h2 className='h6'>The Dandy chair</h2>
          <span>£680</span>
        </div>
        <div className="col-md-3 product ">
          <img src={image4} height={400} className='w-100' alt="" />
          <h2 className='h6'>The wood chair</h2>
          <span>£380</span>
        </div>
      </div>
    </div>

    <div className="container py-5   ">
      <h1 className='font fw-bold'>And also  these !</h1>
      <div className="row ">
        <div className="col-md-3 ps-2 product ">
          <img src={chair3} height={400}  className='w-100 ' alt="" />
          <h2 className='h6'>The Dandy chair</h2>
          <span>£680</span>
        </div>
        <div className="col-md-3 pe-2 product ">
          <img src={chair2} height={400} className='w-100' alt="" />
          <h2 className='h6'>The wood chair</h2>
          <span>£380</span>
        </div>
        <div className="col-md-6 ps-5  product ">
          <img src={chair1} height={400} className='w-100' alt="" />
          <h2 className='h6'>The Poplar suede sofa</h2>
          <span>£980</span>
        </div>
      </div>
    </div>
    <div className="container py-5 ">
      <div className="row ">
        <div className="col-md-6 ">
          <img src={image6} height={400} className='w-100' alt="" />
        </div>
        <div className="col-md-6">
          <h2 className='font'>Our service isn’t just personal, it’s actually
            hyper personally exquisite</h2>
          <p className='font py-3'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className='btn bg-main text-white mt-5'> Get in Touch</button>
        </div>

      </div>
    </div>
    <div className="container my-4 ">
      <div className="row">
        <div className="col-md-6">
          <h2 className='font'>From a studio in London to a global brand with
            over 400 outlets</h2>
          <p className='font py-3'>When we started Avion, the idea was simple.
            Make high quality furniture affordable and available for the mass market.
            Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
          <button className='btn bg-main text-white mt-5'> Get in Touch</button>
        </div>
        <div className="col-md-6 ">
          <img src={image5} height={400} className='w-100' alt="" />
        </div>
      </div>
    </div>
  </>
}
