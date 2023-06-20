import React from 'react'

const Card = ({ imgURL, title, text }) => {
    return (
        <div className='card '>
            <div className='card-img'>
                <img src={imgURL} alt="card" className='img-fluid' />
            </div>
            <div className='card-text-container'>
                <h2 className="">{title}</h2>
                <p className="mb-0">{text}</p>
            </div>
        </div>
    )
}

export default Card