import React from 'react';
import TimeLineNodes from './TimeLineNodes'
import TimeIconList from './TimeIconList'
import Timeline from '@material-ui/lab/Timeline';


function CustomizedTimeline() {
  return (
    <div>
      <Timeline align="alternate">
        {TimeIconList.map(props =>
          <TimeLineNodes
            key={props.id}
            date={props.date}
            image={props.image}
            title={props.title}
            description={props.description}
          />
        )}
      </Timeline>
    </div>
  )
}

export default CustomizedTimeline;
