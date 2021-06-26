import React, {useState} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import {dates, experiences} from './experienceList';

function Experience() {

  const [value, setValue] = useState(2);
  const [text, setText] = useState(experiences[2].experience);
  const [image, setImage] = useState(experiences[2].image);
  const [company, setCompany] = useState(experiences[2].company);
  const [link, setLink] = useState(experiences[2].link);
  const [position, setPosition] = useState(experiences[2].position);


  return (
    <section id="experiences" className="experience">
      <h2 className="header exp">My Experiences</h2>
      <div className="timeline">
        <HorizontalTimeline
          styles={{ background: '#f8f8f8', foreground: '#1A79AD', outline: '#dfdfdf' }}
          index={value}
          indexClick={(index) => {
            setValue(index);
            setText(experiences[index].experience);
            setCompany(experiences[index].company);
            setImage(experiences[index].image);
            setPosition(experiences[index].position);
            setLink(experiences[index].link);
          }}
          values={dates} />
      </div>
      <div className='experience-card'>
        <div className="row">
          <div className="col-sm-9 experience-desc">
            <h3>{company}</h3>
            <h5>{position}</h5>
            <p>{text}</p>
          </div>
          <div className="col-sm-3 company-image">
            <a href={link}><img src={image} className="round" /></a>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Experience;
