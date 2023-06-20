import React from 'react'
import profile from '../../assets/images/Me.png'
import arrow from '../../assets/images/Arrow.png'
const Hero = () => {
    return (
        <div className='hero flex-center' id='home'>
            <div className="container  py-lg-5">
                <div className="row">
                    <div className="col-12  ">
                        <div className="row ">
                            <div className="heading col-12 col-md-10 offset-lg-2 d-flex flex-column-reverse flex-sm-row justify-content-end align-items-center justify-content-sm-end justify-content-lg-start text-end">
                                <img src={arrow} alt="arrow" className='img-fluid ' />
                                <div className="head text-end text-sm-start">
                                    <h4 className='mb-0 text-white text-animation'>Hello! I Am <span className='name '>kamran Ashraf</span> </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 ">
                                <div className="img-container">
                                    <img src={profile} alt="profile" className='img-fluid' />
                                </div>
                            </div>
                            <div className="col-12 col-md-8 flex-center ">
                                <div className="text-container ">
                                    <h3 className="mb-0">A Developer is</h3>
                                    <h1 className="mb-0  " >the architects of  digital realm </h1>
                                    <h6 className="mb-0"> transforming imagination into reality</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero