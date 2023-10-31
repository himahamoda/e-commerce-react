import React from 'react'
import style from './Tables.module.css'
import table1 from '../../Assets/table/table1.jpg'
import table2 from '../../Assets/table/table2.jpg'
import table3 from '../../Assets/table/table3.jpg'
import table4 from '../../Assets/table/table4.jpg'
import table5 from '../../Assets/table/table5.jpg'
import table6 from '../../Assets/table/Coffee Table.jpg'
import table7 from '../../Assets/table/Let creativity table.jpg'
import table8 from '../../Assets/table/Marisol Coffee Table.jpg'
import table9 from '../../Assets/table/Palma Coffee Table.jpg'
import table10 from '../../Assets/table/Solstice Coffee Table.jpg'
import table11 from '../../Assets/table/legged Occasional Table .jpg'
import table12 from '../../Assets/table/table decor.jpg'
export default function Table() {


  return <>
    <div className="container w-100 pt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={table1} height={600} className='w-100' alt="" />
        </div>
        <div className="col-md-6 pt-5">
          <h1 className='h4'>A brand built on the love of craftmanship,
            quality and outstanding customer service</h1>
          <h5 className='title pt-5'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </h5>
          <p className='title text-main pt-5'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        </div>
      </div>
    </div>
{/* sec2 */}
  <div className="container pt-5 w-100">
    <div className="row">
      <div className="col-md-5 ">
        <img src={table6} height={400} width={530}  alt="" />
<h3 className='h6'>        The Poplar suede sofa </h3>  
<button className={`${style.btn}  `}>get for </button>

<span className=' title'>$550</span>
    </div>
      <div className="col-md-3">
      <img src={table3} height={400} className='pe-5'  width={400} alt="" />
      <h3 className='h6'>        The Poplar suede sofa</h3>
      <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
      <div className="col-md-3 ps-5">
      <img src={table7} height={400} width={400} alt="" />
      <h3 className='h6'>The Poplar suede sofa</h3>
      <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
    </div>
  </div>
  <div className="container  pt-5">
    <div className="row">
    
      <div className="col-md-3">
        <img src={table9} height={400} width={300} alt="" />
        <h3 className='h6'>The Poplar suede sofa</h3>
        <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
      <div className="col-md-3 ">
        <img src={table8} height={400} width={300} alt="" />
        <h3 className='h6'>The Poplar suede sofa</h3>
        <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
      <div className="col-md-6">
        <img src={table10} height={400} width={650} alt="" />
        <h3 className='h6'>The Poplar suede sofa</h3>
        <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
    </div>
  </div>
  <div className="container pt-5 w-100">
    <div className="row">
      <div className="col-md-5 ">
        <img src={table2} height={400} width={530}  alt="" />
        <h3 className='h6'>The Poplar suede sofa</h3>
        <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>
      </div>
      <div className="col-md-3">
      <img src={table4} height={400} className='pe-5'  width={400} alt="" />
      <h3 className='h6'>The Poplar suede sofa</h3>
      <button className={`${style.btn} `}>get for </button>

      <span className='title'>$550</span>

      </div>
      <div className="col-md-3 ps-5">
      <img src={table12} height={400} width={400} alt="" />
      <h3 className='h6'>The Poplar suede sofa</h3>
      <button className={`${style.btn} `}>get for </button>
      <span className='title'>$550</span>

      </div>
    </div>
  </div>

  <div className="container py-5 ">
      <div className="row ">
        <div className="col-md-6 ">
          <img src={table5} height={600} className='w-100' alt="" />
        </div>
        <div className="col-md-6">
          <h2 className='font'>Our service isn’t just personal, it’s actually
            hyper personally exquisite</h2>
          <p className='font py-3'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <img src={table12} height={400} alt="" />
        </div>

      </div>
    </div>


  </>
}
