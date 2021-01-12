import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectTitle from './ProjectTitle'

function ProjectPicture(props) {
  return (
    <div className="col-sm-6 project_pic"
      style={{"background": "linear-gradient(to bottom, rgba(22, 22, 22, 0.7) 30%, rgba(22, 22, 22, 0.5) 75%, #161616 100%), url(" + props.image + ")",
      "backgroundPosition": "center center", "backgroundSize": "cover" }}>
      <ProjectTitle
        title={props.title}
      />

      <ProjectDescription
        url={props.url}
        description={props.description}
      />
    </div>
  )
}

export default ProjectPicture;
