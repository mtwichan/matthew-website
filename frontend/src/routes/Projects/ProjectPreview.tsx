
import { useEffect, useState } from "react";
import axios from "axios";

import ProjectPreviewCard from "../../components/Project/ProjectPreviewCard";
import { BACKEND_PROJECT_API_URL } from "../../constants";
type Project = {
    preview_img: string,
    title: string
    created_on: string,
    description: string,
    slug: string
}

const ProjectPreview = (): JSX.Element => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const response = await axios.get(BACKEND_PROJECT_API_URL);
                const projectData = response.data;
                await setProjects(projectData)
            } catch (error) {
                console.log("error calling fetchAllProjects(): ", error)
            }            
        }
        fetchAllProjects();        
    }, [])

    const renderProjectPreviews = () => {
        console.log("Projects metadata >>>", projects)
       return projects.map((project: Project, idx: number) => {
            return <ProjectPreviewCard key={idx} previewImg={project.preview_img} title={project.title} date={project.created_on} description={project.description} slug={project.slug}/>
        })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="mt-5 mb-2">
                    <h1 className="underline font-bold text-4xl">Projects</h1>
                </div>   
                <div className="grid grid grid-cols-3 gap-4">
                    {renderProjectPreviews()}
                </div>      
            </div>
        </>
    )
}
export default ProjectPreview;