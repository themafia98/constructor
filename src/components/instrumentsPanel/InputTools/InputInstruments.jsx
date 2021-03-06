import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';


const InputInstruments = props => {

    let {colorPickerActive} = props.instrumentPanel;
    let {content} = props.componentStats;
    let {fontSize} = props.componentStats;
    let {coords} = props.componentStats;
    let {size} = props.componentStats;

    let _content = content !== '' ? 'Input' : '';

    return (
        <Fragment>
            <p className = 'titleInstument'>Position: </p>
            <span className = 'textCoordsPanel'>
            {coords.x ?
                coords.x + ' / ' + coords.y : ' drop for active'}
            </span>
            <p className = 'titleInstument'>Color: </p>
            <div className = 'controllersText'>
                <input 
                    onClick = {props.cbSetColor}
                    className = 'button_switch color_switch'
                    type = 'button'
                    value = 'color pick'
                />
            </div>
                { colorPickerActive ?
                    <div className ='wrapperColorPicker'>
                        <SketchPicker
                        onChangeComplete={props.cbHandleChangeComplete}
                        color = {props.color ? props.color : 'white'}
                        />
                    </div>
                    : null
                }
            <p className = 'titleInstument'>Size (%):</p>
            <div className = 'controllersText'>
                <input
                    className = 'button_switch'
                    onChange = {props.cbSetWidth}
                    type="number"
                    min = '10' max = '200'
                    value = {size.w ? size.w : 100}
                />
                <input 
                    className = 'button_switch'
                    onChange = {props.cbSetHeight}
                    type="number"
                    min = '10' max = '200'
                    value = {size.h ? size.h : 50}
                />
            </div>
            <p className = 'titleInstument'>Text size: </p>
            <input 
                className = 'button_switch'
                onChange = {props.cbSetSize}
                type="number"
                min = '10' max = '200'
                value = {fontSize ? fontSize : 21}
            />
            <p className = 'titleInstument'>Border radius: </p>
            <input
                onChange = {props.cbSetBorderRadius}
                className = 'button_switch radius'
                type="number"
                value = {props.componentStats.borderRadius ?
                            props.componentStats.borderRadius : 10
                        }
                min = '10' max = '200'
            />

            <p className = 'titleInstument'>Type input: </p>
            <select 
            value = {props.componentStats.typeInput} 
            onChange = {props.cbSetType}
            className = 'button_switch button_switch_type'>
                <option>button</option>
                <option>text</option>
                <option>password</option>
            </select>
            <p className = 'titleInstument'>Content: </p>
            <input
            className = 'button_switch'
            onChange = {props.cbSetContent}
            maxLength = '100'
            type = 'text'
            value = {content ? content : _content}
        />
            <input 
                onClick = {props.cbDelete}
                className = 'instrumentPanel__deleteComponentButton'
                type="button"
                value = 'delete'
            />
        </Fragment>
    )
};

InputInstruments.propTypes = {
    componentStats: PropTypes.object.isRequired, // object with current component data
    cbSetColor: PropTypes.func.isRequired, // callback set color
    cbHandleChangeComplete: PropTypes.func.isRequired, // callback state color picker
    cbSetWidth: PropTypes.func.isRequired, // callback set width
    cbSetHeight: PropTypes.func.isRequired, // callback set height
    cbSetSize: PropTypes.func.isRequired, // callback set size
    cbSetBorderRadius: PropTypes.func.isRequired, // callback set border-radius
    cbSetContent: PropTypes.func.isRequired, // callback set content input
    cbDelete: PropTypes.func.isRequired, // callback delete
}

export default InputInstruments;