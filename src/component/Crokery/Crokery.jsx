import React from 'react'
import style from './Crokery.module.css'
import img1 from '../../Assets/crockery/1.jpg'
import img2 from '../../Assets/crockery/2.jpg'
import img3 from '../../Assets/crockery/3.jpg'
import img4 from '../../Assets/crockery/4.jpg'
import img5 from '../../Assets/crockery/5.jpg'
import img6 from '../../Assets/crockery/6.jpg'
import img7 from '../../Assets/crockery/7.jpg'
import img8 from '../../Assets/crockery/8.jpg'
import img9 from '../../Assets/crockery/9.jpg'
import img10 from '../../Assets/crockery/10.jpg'
export default function Crokery() {


  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={img2} height={600} width={600} className='ps-5' alt="" />
        </div>
        <div className="col-md-6">
          <h1 className='font py-5'>
            A brand built on the love of craftmanship, quality and outstanding customer service</h1>
          <p className='title pt-5'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
          <h5 className='title pt-5'>
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </h5>
        </div>
      </div>
    </div>

    <div className="container pt-5">

      <div className="row">
        <div className="col-md-4">
          <h2 className={`${style.font}`}> The Poplar suede sofa ♥</h2>
          <h5 className={`${style.font}`}>$340</h5>
          <img src={img1} height={500} width={400} alt="" />
          
        </div>
        <div className="col-md-4">
          <img src={img3} height={500} alt="" />
          <h2 className={`${style.font}`}>The Dandy chair ☻</h2>
          <h5 className={`${style.font}`}>$340</h5>

        </div>
        <div className="col-md-4">
          <h2 className={`${style.font}`}>The Poplar suede sofa ♣</h2>
          <h5 className={`${style.font}`}>$340</h5>

          <img src={img6} height={500} alt="" />
        </div>
      </div>
    </div>
    <div className="container pt-5">

      <div className="row">
        <div className="col-md-4">
          <img src={img7} height={500} width={400} alt="" />
          <h2 className={`${style.font}`}> The Poplar suede sofa ♥</h2>
          <h5 className={`${style.font}`}>$340</h5>
          
        </div>
        <div className="col-md-4">
          <h2 className={`${style.font}`}>The Dandy chair ☻</h2>
          <h5 className={`${style.font}`}>$340</h5>
          <img src={img4} height={500} width={400} alt="" />

        </div>
        <div className="col-md-4">

          <img src={img10} height={500} alt="" />
          <h2 className={`${style.font}`}>The Poplar suede sofa ♣</h2>
          <h5 className={`${style.font}`}>$340</h5>
        </div>
      </div>
    </div>


    <div className="container py-5 ">
      <div className="row ">
        <div className="col-md-6 ">
          <img src={img9} height={600} className='w-100' alt="" />
        </div>
        <div className="col-md-6">
          <h2 className='font pt-5'>Our service isn’t just personal, it’s actually
            hyper personally exquisite</h2>
          <p className='font py-4'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <img src={img2} height={265} alt="" />
        </div>

      </div>
    </div>
  </>
}
