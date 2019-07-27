import React, {useEffect, useState} from 'react';
import eventEmitter from '../../../EventEmitter';
import styled from 'styled-components';


const Background = styled.div`
    position: relative;
    width: 100%;
    height: 800px;
    background-size: cover;
    background-color: ${props => props.backgroundColor};
    background-image: url(${props => props.backgroundImage});
`;

const BackgroundComponent = props => {

    const [id] = useState(props.id);
    const [name] = useState(props.name);
    let boxComponent = React.createRef();

    let [backgroundColor, setBgColor] = useState(props.background);
    let [backgroundImage, setImage] = useState(props.backgroundImage ? props.backgroundImage : null);

    const saveWidth = event => {
        boxComponent.current.focus();
        let boxInform =  boxComponent.current.getBoundingClientRect();
        eventEmitter.emit(`EventSaveWidth${name}`, {width: boxInform.width, height: boxInform.height});
    }

    const openBgInstruments = event => {
        eventEmitter.emit('EventInstrumentPanel',{
            name: name,
            target: 'background',
            id: id,
        });
        event.stopPropagation();
    }

    const changeColor = eventItem => {
        if (eventItem.idSection === name)
        setBgColor(eventItem.colorRGB);
    }

    const setBackgroundImage = event => {
        const {urlFull} = event;
        setImage(urlFull);
    };

    const didUpdate = () => {
        saveWidth();
        eventEmitter.on(`EventChangeColorBackground${id}`, changeColor);
        eventEmitter.on(`EventSetBackgroundImage${id}`, setBackgroundImage);
        return () => {
            eventEmitter.off(`EventChangeColorBackground${id}`, changeColor);
            eventEmitter.off(`EventSetBackgroundImage${id}`, setBackgroundImage);
        }
    }

    useEffect(didUpdate);
    return (
        <Background
            ref  = {boxComponent}
            onClick={openBgInstruments}
            backgroundColor = {backgroundColor ? backgroundColor : props.background}
            backgroundImage = {backgroundImage ? backgroundImage : props.backgroundImage}
        >
            {props.children}
        </Background>
    )
}

export default BackgroundComponent;