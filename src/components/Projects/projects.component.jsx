import projects from './projects.js'

const ProjectPage=()=>{
    return (
        <div>
            {projects.map((project)=>{
                 const { id, title } = project;
                 console.log(projects)
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

export default ProjectPage