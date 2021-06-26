import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import ProjectsList from './projectsList';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import LanguageIcons from './languageIcons';

function Projects() {

  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [buttonTabs, setButtonTabs] = useState([]);
  const [buttonNames, setButtonNames] = useState(["All", "AI", "Web", "Mobile", "System", "Games"]);

  useEffect(() => {
    createProjectList();
    // initButtonTabs();
    changeButtonColor();
  }, []);

  useEffect(() => {
    changeButtonColor();
  }, [index]);

  function createProjectList() {
    const projectCols = [];
    for (var i = 0; i < ProjectsList.length; i++) {
      projectCols.push(
        <div className="col-sm-6 projectCol">
          <div className="projectCard">
            <h4 className="projectTitle"><span>{ProjectsList[i].title}</span></h4>
            <p>{ProjectsList[i].description}</p>
            <LanguageIcons
              languages={ProjectsList[i].languages}
            />
          </div>
        </div>
      )
    }
    setProjects(projectCols);
  }

  // function initButtonTabs() {
    // const buttonList = [];
    // for (var i = 0; i < buttonNames.length; i++) {
    //   var classNames = "";
    //   if (i === 0) {
    //     classNames = "selected";
    //   }
    //   var name = "button-" + i;
    //   var projectType = buttonNames[i];
    //   buttonList.push(
    //     <div className="col-sm">
    //       <Button id={name} className={classNames} onClick={() => filterProjects(projectType)}>{projectType}</Button>
    //     </div>
    //   );
    // };

    // setButtonTabs(buttonList);
  // }

  function changeButtonColor() {
    var name = "#button-" + index;

    if (previous !== index) {
      var previousName = "#button-" + previous;

      $(previousName).removeClass("selected");
    }
    $(name).addClass("selected");
  }

  function filterProjects(projectType) {
    if (projectType === "All") {
      createProjectList();
    } else {
      const projectCols = [];
      for (var i = 0; i < ProjectsList.length; i++) {
        if (ProjectsList[i].type === projectType) {
          projectCols.push(
            <div className="col-sm-6 projectCol">
              <div className="projectCard">
                <h4 className="projectTitle"><span>{ProjectsList[i].title}</span></h4>
                <p>{ProjectsList[i].description}</p>
                <LanguageIcons
                  languages={ProjectsList[i].languages}
                />
              </div>
            </div>
          )
        }
      }
      setProjects(projectCols);
    }

    var currTypeIndex = buttonNames.indexOf(projectType);
    setPrevious(index);
    setIndex(currTypeIndex);
  }

  return (
    <div id="projects">
      <div>
        <h2 className="header project">My Projects</h2>
      </div>
      <div className="container projectContainer">
        <div className="row buttonList">
          <div className="col-sm-2" align="center">
            <Button id="button-0" className="selected" onClick={() => filterProjects("All")}>All</Button>
          </div>
          <div className="col-sm-2" align="center">
            <Button id="button-1" onClick={() => filterProjects("AI")}>AI</Button>
          </div>
          <div className="col-sm-2" align="center">
            <Button id="button-2" onClick={() => filterProjects("Web")}>Web</Button>
          </div>
          <div className="col-sm-2" align="center">
            <Button id="button-3" onClick={() => filterProjects("Mobile")}>Mobile</Button>
          </div>
          <div className="col-sm-2" align="center">
            <Button id="button-4" onClick={() => filterProjects("System")}>System</Button>
          </div>
          <div className="col-sm-2" align="center">
            <Button id="button-5" onClick={() => filterProjects("Games")}>Games</Button>
          </div>
        </div>
        <div className="row projectList">
          {projects}
        </div>
      </div>

    </div>
  )

  // const [index, setIndex] = useState(Math.floor(ProjectsList.length / 2));
  //
  // function move(next) {
  //   if (next) {
  //     setIndex(index + 1);
  //     var selected = $(".selected").next();
  //   } else {
  //     setIndex(index - 1);
  //     var selected = $(".selected").prev();
  //   }
  //   var next = $(selected).next();
  //   var prev = $(selected).prev();
  //   var prevSecond = $(prev).prev();
  //   var nextSecond = $(next).next();
  //
  //   $(selected).removeClass().addClass("selected");
  //
  //   $(prev).removeClass().addClass("prev");
  //   $(next).removeClass().addClass("next");
  //
  //   $(nextSecond).removeClass().addClass("nextRightSecond");
  //   $(prevSecond).removeClass().addClass("prevLeftSecond");
  //
  //   $(nextSecond).nextAll().removeClass().addClass('hideRight');
  //   $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  // }
  //
  // const half = Math.floor(ProjectsList.length / 2);
  //
  // const hideLefts = [];
  //
  // for (var i = 0; i < half - 2; i++) {
  //   hideLefts.push(
  //     <div class="hideLeft">
  //       <img src={ProjectsList[i].image}/>
  //       <div class="overlay">
  //         <div class="text">
  //           <h4>{ProjectsList[i].title}</h4>
  //           <p>{ProjectsList[i].description}</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  //
  // const hideRights = [];
  //
  // for (var i = half + 3; i < ProjectsList.length; i++) {
  //   hideRights.push(
  //     <div class="hideRight">
  //       <img src={ProjectsList[i].image}/>
  //       <div class="overlay">
  //         <div class="text">
  //           <h4>{ProjectsList[i].title}</h4>
  //           <p>{ProjectsList[i].description}</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  //
  // const selected = (
  //   <div class="selected">
  //     <img src={ProjectsList[half].image}/>
  //     <div class="overlay">
  //       <div class="text">
  //         <h4>{ProjectsList[half].title}</h4>
  //         <p>{ProjectsList[half].description}</p>
  //       </div>
  //     </div>
  //   </div>
  // )
  //
  // const prev = (
  //   <div class="prev">
  //     <img src={ProjectsList[half-1].image}/>
  //     <div class="overlay">
  //       <div class="text">
  //         <h4>{ProjectsList[half-1].title}</h4>
  //         <p>{ProjectsList[half-1].description}</p>
  //       </div>
  //     </div>
  //   </div>
  // )
  //
  // const prevSecond = (
  //   <div class="prevLeftSecond">
  //     <img src={ProjectsList[half-2].image}/>
  //     <div class="overlay">
  //       <div class="text">
  //         <h4>{ProjectsList[half-2].title}</h4>
  //         <p>{ProjectsList[half-2].description}</p>
  //       </div>
  //     </div>
  //   </div>
  // )
  //
  // const next = (
  //   <div class="next">
  //     <img src={ProjectsList[half+1].image}/>
  //     <div class="overlay">
  //       <div class="text">
  //         <h4>{ProjectsList[half+1].title}</h4>
  //         <p>{ProjectsList[half+1].description}</p>
  //       </div>
  //     </div>
  //   </div>
  // )
  //
  // const nextSecond = (
  //   <div class="nextRightSecond">
  //     <img src={ProjectsList[half+2].image}/>
  //     <div class="overlay">
  //       <div class="text">
  //         <h4>{ProjectsList[half+2].title}</h4>
  //         <p>{ProjectsList[half+2].description}</p>
  //       </div>
  //     </div>
  //   </div>
  // )
  //
  // const isEndLeft = (index === 0) ? "disabled": "contained";
  // const isEndRight = (index === ProjectsList.length-1) ? "disabled": "contained";
  //
  //
  // return (
  //   <section id="projects">
  //     <h2 className="header project">My Projects</h2>
  //
  //     <div id="carousel">
  //
  //       {hideLefts.map(props => props)}
  //
  //       {prevSecond}
  //
  //       {prev}
  //
  //       {selected}
  //
  //       {next}
  //
  //       {nextSecond}
  //
  //       {hideRights.map(props => props)}
  //
  //     </div>
  //
  //     <div className="nextPrev">
  //       <Button variant={isEndLeft} id="prev" onClick={() => move(false)}>Prev</Button>
  //       <Button variant={isEndRight} id="next" onClick={() => move(true)}>Next</Button>
  //     </div>
  //
  //
  //   </section>
  // )
}

export default Projects;
