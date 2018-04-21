// @flow
import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';


type Props = {};

type State = {
  courses: [],
};

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = { courses };
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Courses</a>
              {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#">React</a></li>
                <li><a href="#">React Native</a></li>
                <li><a href="#">Framer</a></li>
              </ul> */}
            </div>
          </nav>
        </div>
        <div>
          <Grid items={this.state.courses} />
        </div>
      </div>
    );
  }
}
