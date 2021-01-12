import React from 'react'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import BasicTimeline from './components/timeline/Timeline'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Skills from './components/skills/Skills'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/nav/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Personal-Website/" component={Profile} />
          <Route exact path="/Personal-Website/about" component={About} />
          <Route exact path="/Personal-Website/projects" component={Projects} />
          <Route exact path="/Personal-Website/experience" component={BasicTimeline} />
          <Route exact path="/Personal-Website/skills" component={Skills} />
          <Route exact path="/Personal-Website/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>

  )
}

export default App;
