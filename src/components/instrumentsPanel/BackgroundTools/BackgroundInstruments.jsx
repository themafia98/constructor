import React, {Fragment,useState} from 'react';
import {SketchPicker} from 'react-color';

const BackgroundInstruments = props => {

    const {componentsStats} = useState(props.componentStats);
    let color = null;
    if (typeof componentsStats === 'object' &&
        componentsStats.hasOwnProperty('color'))
        color = componentsStats.color;

    return (
        <Fragment>
        <p className = 'titleInstument'>Color: </p>
        <input
            onClick = {props.cbSetColor}
            className = 'button_switch Color'
            type = 'button'
            value = 'color pick'
        />
            { props.colorPickerActive ?
                <SketchPicker
                    onChangeComplete={props.cbHandleChangeComplete}
                    color = {color ? color : 'red'}
                />
                : null
            }
            <input 
                onClick = {props.cbSearchImage}
                className = 'ImageSearchButton'
                type = 'button'
                value = 'background-image'
            />
            <input 
                onClick = {props.cbSaveChanges}
                className = 'saveButtonInstument'
                type = 'button'
                value = 'save changes'
            />
        </Fragment>
    )

}

export default BackgroundInstruments;