import { ProjectData } from '../data/data'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
        // the main box around it
        <div className="h-screen pt-24 pl-[200px] border-2 border-green-400 text-white">
            <h1 className=" ml-16 font text-[60px]  text-white">Some of the Projects I've worked on</h1>
            <div>
                {
                    ProjectData.map((project) => (
                        <ProjectCard
                            key= {project.title}
                            title = {project.title}
                            description = {project.description}
                            website = {project.website}
                            github = {project.github}
                            tags = {project.tags}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Projects