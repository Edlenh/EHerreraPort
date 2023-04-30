import projects from '../../routes/Projects/projects.js'
import './projects.style.css'


const Projects=()=>{
    return(
        <div className='main-container'>
        <span className='project-span'>
        <h1 className="project-header">PROJECTS</h1></span>
        <div className='gallery'>
        <div className="project-container">
        <div className="project-container-items">
        {projects.map((project)=>{
        const { id, title ,link , img, alt} = project;
        return(
            <div key={id}>
                    <a href={link}  target="_blank" rel="noopener noreferrer"><h2 className='project-item'>{title}</h2>
                    <img className ="project-image" src={img} alt={alt}/>
                    </a>
            </div>
            )
        })}
        </div>
    </div>
</div>
</div>
    )
}

export default Projects