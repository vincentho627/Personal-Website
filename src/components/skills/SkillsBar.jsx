import React from 'react'

function SkillsBar(props) {
  return (
    <tr>
      <td className="skill-box">
        <h3 className="skill-name">{props.name}</h3>
      </td>
      <td>
        <div className="progress">
          <div className="progress-bar" style={{"width": "" + props.percent + ""}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </td>
    </tr>
  )
}

export default SkillsBar;
