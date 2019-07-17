import React from 'react';
import PropTypes from 'prop-types';

import {TitleComponent, BackgroundComponent} from '../buildComponents/header/components/headerComponents';

import eventEmitter from '../../EventEmitter';

import './buildMenu.scss';

class BuildMenu extends React.PureComponent {

    static propTypes = {
        component: PropTypes.object
    }

    state = {
        component: {...this.props.component},
        title: 'Title'
    }

    addText = event => {

        let componentArrayWrapper = [];
        componentArrayWrapper.push(<TitleComponent key = 'header'>{this.state.title}</TitleComponent>);
        eventEmitter.emit('EventBuildHeaderComponents',{target: 'Header', type: 'text', component: componentArrayWrapper});
        event.stopPropagation();
    }

    addBackground = event => {

        let componentArrayWrapper = [];
        componentArrayWrapper.push(<BackgroundComponent key = 'bgHeader'/>);
        eventEmitter.emit('EventBuildHeaderComponents',{target: 'Header', type: 'background', component: componentArrayWrapper});

        event.stopPropagation();
    }

    render(){

        return (
            <div className = 'ComponentsMenu'>
                <button onClick = {this.addBackground} className = 'ImageTool CompoentnsMenu_button' ><span>Image</span></button>
                <button onClick = {this.addText} className = 'TextTool CompoentnsMenu_button' ><span>Text</span></button>
                <button 
                    disabled = {this.state.component.name !== 'Header' ? false : true}
                    className = 'ButtonTool CompoentnsMenu_button' >
                    <span>Button</span>
                </button>
                <button className = 'VideoTool CompoentnsMenu_button' ><span>Video</span></button>
            </div>
        )
    }
}

export default BuildMenu;