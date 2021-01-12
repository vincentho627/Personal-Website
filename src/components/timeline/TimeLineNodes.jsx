import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TimeIcon from './TimeIcon';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: "#474a56",
    color: "#ebebe3"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function TimeLineNodes(props) {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {props.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <TimeIcon
            image={props.image}
          />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {props.title}
          </Typography>
          <Typography>{props.description.split('\n').map(str => <p>{str}</p>)}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimeLineNodes;
