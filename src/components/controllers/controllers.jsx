import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/icon';
import BuildMenu from '../componentsBuildMenu/BuildMenu';

import styled from 'styled-components';

const ControllersBox = styled.div.attrs(props => ({
            style: {
                left: props.coordX,
                top: props.coordY,
    }}))
    `position: absolute;`;



class Controllers extends React.PureComponent {

    static propTypes = {
        menuActive: PropTypes.bool,
    }

    state = {
        viewComponentMenu: false,
        shiftX: 0,
        shiftY: 0,
        coordsX: '50%',
        coordsY: '0'
    }

    componentMenu = (event) => {
        this.setState({viewComponentMenu: this.state.viewComponentMenu ? false : true})
    }

    saveCoords = event => {
        let left = event.target.getBoundingClientRect().left;
        let top = event.target.getBoundingClientRect().top;
        this.setState({...this.state, shiftX: event.pageX - left, 
        shiftY: event.pageY - top + 55});

        event.stopPropagation();
    }

    drag = event => {
        if (!this.state.viewComponentMenu){
        this.setState({...this.state, coordsX: event.pageX - this.state.shiftX + 'px', 
                    coordsY: event.pageY - this.state.shiftY + 'px'});
        }
        event.stopPropagation();
    }

    controlBox = null;
    refControll = (node) => this.controlBox = node;


    render(){
        return (
            <Fragment>
            { this.props.menuActive ?
                <ControllersBox
                ref = {this.refControll}
                className = 'ControllersEditComponent'
                coordX = {this.state.coordsX}
                coordY = {this.state.coordsY}
                draggable = {!this.state.viewComponentMenu}
                onMouseDown = {this.saveCoords}
                onClick = {this.componentMenu}
                onDrag   = {this.drag}
                onDragEnd = {this.drag}
                >
                    <Icon
                        draggable = {true}
                        onClick = {this.componentMenu}
                        className = 'addButton'
                        path = '/img/addButton.png'
                    />
                    {this.state.viewComponentMenu ? <BuildMenu component = {{...this.props.component}} /> : null}
                </ControllersBox>
                : null
            }
            </Fragment>
        )
    }
}

export default Controllers;