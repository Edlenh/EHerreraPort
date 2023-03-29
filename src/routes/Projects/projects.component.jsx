import { Outlet } from "react-router-dom";
import projects from '../../routes/Projects/projects.js'
import './projects.style.css'

const Projects=()=>{
    return(
        <div>
        <Outlet/>
        <h1 className="header">PROJECTS</h1>
        {projects.map((project)=>{
                 const { id, title } = project;
                 return(
                <div key={id}>
                    <h1>{title}</h1>
                    {/* <img src={imageUrl} alt={title}/> */}
                    </div>
                 )
                 })}
        </div>
    )
}

export default Projects