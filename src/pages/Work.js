import React from 'react'
import Card from 'componants/Card'
import card1 from 'assets/images/card1.png'
import card2 from 'assets/images/card2.png'
import card3 from 'assets/images/card3.png'
import card4 from 'assets/images/card4.png'


const Work = () => {
    return (
        <div className='work' id='work'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row mb-4">
                            <div className="col-12 ">
                                <h1 className="mb-0">Work Experience</h1>
                            </div>
                        </div>
                        <div className="row card-container">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <Card imgURL={card1} title="CIB on the Mobile" text='Take your client onboard seamlessly by our amazing tool of digital onboard process.' />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Card imgURL={card2} title="CIB on the Mobile" text='Take your client onboard seamlessly by our amazing tool of digital onboard process.' />                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <Card imgURL={card3} title="CIB on the Mobile" text='Take your client onboard seamlessly by our amazing tool of digital onboard process.' />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Card imgURL={card4} title="CIB on the Mobile" text='Take your client onboard seamlessly by our amazing tool of digital onboard process.' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work