import React from 'react';

function ProjectDescription(props) {
  return (
    <a href={props.url}>
      <div className="overlay">
        <h2 className="project_description">{props.description}</h2>
      </div>
    </a>

  )
}

export default ProjectDescription;
