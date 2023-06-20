import React from 'react'

const ProjectCard = ({ title, text1, text2, imgURL }) => {
    return (
        <>
            <div className='project-card'>
                <div className='project-card-container-1  '>
                    <div className='card-text-container-1'>
                        <p className="mb-0">{text1}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className='card-text-container-2  '>
                        <p className='mb-0'>{text2}</p>
                    </div>
                </div>
                <div className='project-card-container-2'>
                    <div  >
                        <img src={imgURL} alt="project" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard