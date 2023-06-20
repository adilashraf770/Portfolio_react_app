import React from 'react'
import { BsGoogle, BsInstagram } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
const Contact = () => {
    return (
        <div className='contact ' id='contact'>
            <div className="container contact-card">
                <h1 className="mb-0">Contact</h1>
                <div className='contact-card-text-container'>
                    <p className="mb-0">I'm currently looking to join a cross-functional team that values improving people's lives
                        through accessible design. or have a project in mind? Let's connect.</p>
                    <p className='mb-0 mt-3' ><a href="mailto:smadal770@gmail.com" className='text-white'  >kamranashraf@gmail.com</a></p>
                </div>
                <div className='contact-card-icons'>
                    <div>
                        <BsGoogle href='https://www.google.com/' />
                    </div>
                    <div>
                        <BiWorld />
                    </div>
                    <div>
                        <BsInstagram />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Contact