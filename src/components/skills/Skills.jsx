import React from 'react';
import SkillsList from './SkillsList'
import SkillsBar from './SkillsBar'
import TimeIcon from '../timeline/TimeIcon'

function Skills() {
  var len = SkillsList.length;
  const partOne = SkillsList.slice(0, len / 2);
  const partTwo = SkillsList.slice(len / 2);
  return (
    <div className="container-fluid skills-container">
      <h2 className="skills-title">Technical Proficiencies</h2>
      <div className="row">
        <div className="col-lg-6 col-md-6" style={{"paddingRight": "5%"}}>
          <table className="table">
            {partOne.map(props =>
                <SkillsBar
                  key={props.id}
                  name={props.name}
                  percent={props.percent}
                />
              )
            }
          </table>
        </div>
        <div className="col-lg-6 col-md-6" style={{"paddingLeft": "5%"}}>
          <table className="table">
            {partTwo.map(props =>
                <SkillsBar
                  key={props.id}
                  name={props.name}
                  percent={props.percent}
                />
              )
            }
          </table>
        </div>
      </div>
      <div className="icon-bar">
        {/* <TimeIcon> */}
      </div>
    </div>
  )
}

export default Skills;
