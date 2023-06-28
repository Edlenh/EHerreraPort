import * as React from 'react';
import projects from '../../routes/Projects/projects.js';
import './projects.style.css';
import Grid from '@mui/material/Grid';

const Projects = () => {
  return (
    <div className='main-container'>
      <span className='project-span'>
        <h1 className="project-header">PROJECTS</h1>
      </span>
      <div className='gallery'>
        <Grid container spacing={2}>
          {projects.map((project) => {
            const { id, title, link, img, alt } = project;
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <h2 className='project-item'>{title}</h2>
                  <img className ="project-image" src={img} alt={alt} />
                </a>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
