import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'


export default function Nav() {


    return <>
        <div className="row w-100 ">
            <div className="col-md-4">
                <i className='fas fa-search text-main ms-4 py-2  '></i>
            </div>
            <div className={`${style.Nav} col-md-4`} >
                <h2 className='text-center'>Avion</h2>
            </div>
            <div className="col-md-4 p-2 d-flex  justify-content-end  ">
                <i className='fas fa-cart-plus px-2 text-main '></i>
                <i class="fa-regular fa-circle-user  "></i>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-body">


            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">

                <ul class="navbar-nav ">
                    <li class="nav-item ">
                        <Link class="nav-link" to={'plantpots'}>Plant pots </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to={'Ceramics'}>Ceramics</Link>
                    </li>
                    <li class="nav-item">
                       <Link class="nav-link" to={'chairs'}>chairs</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to={'table'} >Tables</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link "to={'crockery'}>Crockery</Link>
                                            </li>
                    <li class="nav-item">
                        <Link class="nav-link " to={'tableware'}>Tableware</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>





    </>



}
