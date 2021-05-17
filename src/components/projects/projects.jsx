import React, {useState} from 'react';
import $ from 'jquery';
import ProjectsList from './projectsList';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';

function Projects() {

  const [index, setIndex] = useState(Math.floor(ProjectsList.length / 2));

  function move(next) {
    if (next) {
      setIndex(index + 1);
      var selected = $(".selected").next();
    } else {
      setIndex(index - 1);
      var selected = $(".selected").prev();
    }
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  }

  const half = Math.floor(ProjectsList.length / 2);

  const hideLefts = [];

  for (var i = 0; i < half - 2; i++) {
    hideLefts.push(
      <div class="hideLeft">
        <img src={ProjectsList[i].image}/>
        <div class="overlay">
          <div class="text">
            <h4>{ProjectsList[i].title}</h4>
            <p>{ProjectsList[i].description}</p>
          </div>
        </div>
      </div>
    )
  }

  const hideRights = [];

  for (var i = half + 3; i < ProjectsList.length; i++) {
    hideRights.push(
      <div class="hideRight">
        <img src={ProjectsList[i].image}/>
        <div class="overlay">
          <div class="text">
            <h4>{ProjectsList[i].title}</h4>
            <p>{ProjectsList[i].description}</p>
          </div>
        </div>
      </div>
    )
  }

  const selected = (
    <div class="selected">
      <img src={ProjectsList[half].image}/>
      <div class="overlay">
        <div class="text">
          <h4>{ProjectsList[half].title}</h4>
          <p>{ProjectsList[half].description}</p>
        </div>
      </div>
    </div>
  )

  const prev = (
    <div class="prev">
      <img src={ProjectsList[half-1].image}/>
      <div class="overlay">
        <div class="text">
          <h4>{ProjectsList[half-1].title}</h4>
          <p>{ProjectsList[half-1].description}</p>
        </div>
      </div>
    </div>
  )

  const prevSecond = (
    <div class="prevLeftSecond">
      <img src={ProjectsList[half-2].image}/>
      <div class="overlay">
        <div class="text">
          <h4>{ProjectsList[half-2].title}</h4>
          <p>{ProjectsList[half-2].description}</p>
        </div>
      </div>
    </div>
  )

  const next = (
    <div class="next">
      <img src={ProjectsList[half+1].image}/>
      <div class="overlay">
        <div class="text">
          <h4>{ProjectsList[half+1].title}</h4>
          <p>{ProjectsList[half+1].description}</p>
        </div>
      </div>
    </div>
  )

  const nextSecond = (
    <div class="nextRightSecond">
      <img src={ProjectsList[half+2].image}/>
      <div class="overlay">
        <div class="text">
          <h4>{ProjectsList[half+2].title}</h4>
          <p>{ProjectsList[half+2].description}</p>
        </div>
      </div>
    </div>
  )

  const isEndLeft = (index === 0) ? "disabled": "contained";
  const isEndRight = (index === ProjectsList.length-1) ? "disabled": "contained";


  return (
    <section id="projects">
      <h2 className="header project">My Projects</h2>

      <div id="carousel">

        {hideLefts.map(props => props)}

        {prevSecond}

        {prev}

        {selected}

        {next}

        {nextSecond}

        {hideRights.map(props => props)}

      </div>

      <div className="nextPrev">
        <Button variant={isEndLeft} id="prev" onClick={() => move(false)}>Prev</Button>
        <Button variant={isEndRight} id="next" onClick={() => move(true)}>Next</Button>
      </div>


    </section>
  )
}

export default Projects;
