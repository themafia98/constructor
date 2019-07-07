import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import eventStream from './EventEmitter.js';

import Header from './components/header/Header';
import Modal from './components/modalWindow/ModalWindow';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

import './main.scss';

const title = require('./config.json').title;

class App extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    mode: PropTypes.string,
  }

  state = {
    workMode: 'default',
  }

  changeWorkMode = (event) => {
    console.log(event.action);
    this.setState ({
      ...this.state,
      workMode: event.action
    });
  }

  render(){

    return (
      <Fragment>
        <Header><h3>{title}</h3></Header>
        {(this.state.workMode === 'newProject') ? <Modal workMode = {this.state.workMode} /> : null}
          <ProjectsSection />
      </Fragment>
    )
  }

  componentDidMount(){
    eventStream.on('EventChangeWorkMode', this.changeWorkMode);
  }

  componentWillUnmount(){
    eventStream.off('EventChangeWorkMode', this.changeWorkMode);
  }
}

export default connect()(App);
