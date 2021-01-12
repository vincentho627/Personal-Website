import React from 'react'
import ProjectsList from './ProjectsList'
import ProjectPicture from './ProjectPicture'

function Projects() {
  return (
    <div>
      <div className="row" >
        {ProjectsList.map(props =>
          <ProjectPicture
            key={props.id}
            image={props.image}
            title={props.title}
            url={props.url}
            description={props.description}
          />
        )}
      </div>
    </div>
  )
}

export default Projects;
