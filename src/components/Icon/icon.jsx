import React, {useState} from 'react';

import './icon.scss';

function Icon(props){
    const [path] = useState(props.path);
    const [className] = useState(props.className ? props.className : null);
    const [draggable] = useState(props.draggable ? true : false);

    return (
    <img
        draggable = {draggable}
        onClick = {props.onClick ? props.onClick : null}
        className = {className}
        title = {props.title ? props.title : null}
        src = {process.env.PUBLIC_URL + path } alt = 'icon'>
    </img>
    )
}

export default Icon;