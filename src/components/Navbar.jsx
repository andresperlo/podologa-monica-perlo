import React from 'react'
import '../css/style.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navClass">
            <div class="container-fluid" >
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='classeAPadre'>
                        <a class="navbar-brand ps-3" href="/podologa-monica-perlo" >
                            <img  className='logo' src="https://res.cloudinary.com/dbb9coys1/image/upload/v1652566041/WhatsApp_Image_2022-03-29_at_9.45.30_AM_1_vzrz12.png" alt="" width={'100%'} />
                        </a>

                    </div>
                    <div className='classeAPadre d-sm-block d-md-none d-flex justify-content-end align-items-center'>
                        <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" className='botonH' src="https://res.cloudinary.com/dbb9coys1/image/upload/v1652617698/botonHamburgesa2_o5drbh.png" alt="" width={'100%'} />
                        <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" className='botonH' src="https://res.cloudinary.com/dbb9coys1/image/upload/v1652586996/botonHamburgesa3_hs5e7r.png" alt="" width={'100%'} />
                        <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" className='botonH' src="https://res.cloudinary.com/dbb9coys1/image/upload/v1652617700/botonHamburgesa_jpza1c.png" alt="" width={'100%'} />
                    </div>
                </div>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header d-flex justify-content-end d-sm-block d-md-none claseA">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body justify-content-end pe-3 claseA">
                        <div className='clasePuntero'>
                            <a href="/podologa-monica-perlo">Inicio</a>
                        </div>
                        <div className='clasePuntero'>
                            <a href="#nosotros" className='px-3' >Nosotros</a>
                        </div>
                        <div className='clasePuntero'>
                            <a href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;