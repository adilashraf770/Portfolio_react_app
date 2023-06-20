import ProjectCard from 'componants/ProjectCard'
import React from 'react'
import project1 from 'assets/images/project1.png'

const Projects = () => {
    return (
        <div className='projects flex-center' id='project'>
            <div className="container">
                <div className='project'>
                    <ProjectCard text1={'Featured  Project'} title={'Example Project'} text2={'A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'} imgURL={project1} />
                </div>
                <div className='project prjt-1'>
                    <ProjectCard text1={'Featured  Project'} title={'Example Project'} text2={'A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'} imgURL={project1} />
                </div>
                <div className='project'>
                    <ProjectCard text1={'Featured  Project'} title={'Example Project'} text2={'A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'} imgURL={project1} />
                </div>

            </div>
        </div>
    )
}

export default Projects