import React from 'react'
import skill from 'assets/images/Skills..png'
const Skills = () => {
    return (
        <div className='skill'>
            <div className="container text-center">
                <div className="row">
                    <div className="col skill-head">
                        <h3 className="mb-0">I'm currently looking to join a <span className="head">cross-functional</span> team</h3>
                        <p className="mb-0">that values improving people's lives through accessible design </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="skill-img-container">
                            <img src={skill} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills