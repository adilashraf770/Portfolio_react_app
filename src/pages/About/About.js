import React from 'react'
import facebook from 'assets/images/facebook.svg'

const About = () => {
    return (
        <div className='about flex-center' id='about'>
            <div className="container">
                <div className="row about-container ">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 text-container-1">
                                <h1 className="mb-0  ">I'm a Software Engineer. </h1>
                                <h4 className="mb-0">Currently, I'm a Software Engineer at <img src={facebook} alt="facebook" className='img-fluid rounded-circle ' width='20px' /> <a href="https://www.facebook.com/" className='facebook'>facebook</a>.</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12  col-lg-10 text-container-2">
                                <h4 className="mb-0  ">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                                    I make meaningful and delightful digital products that create an equilibrium
                                    between user needs and business goals.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About