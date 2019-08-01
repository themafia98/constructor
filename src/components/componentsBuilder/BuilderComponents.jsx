import React from 'react';

import Input from '../buildComponents/components/Input';
import Media from '../buildComponents/components/Media';
import Image from '../buildComponents/components/Image';
import TextComponent from '../buildComponents/components/Text';
import BackgroundComponent from '../buildComponents/components/Background';

const BuilderComponents = props => {

    if (props.type === 'text')
        return <TextComponent
                    key = {`text${props.id}`}
                    targetSection = {props.targetSection}
                    sizeParentBox = {{...props.sizeParentBox}}
                    id = {props.id}
                    size = {props.size ? props.size : props.fontSize}
                    color = {props.color}
                    opacity = {props.opacity}
                    coords = {{...props.coords}}
                    font = {props.font}
                >
                    {props.content}
                </TextComponent>

    if (props.type === 'background')
        return <BackgroundComponent
                    targetSection = {props.targetSection}
                    color = {props.color}
                    width = {props.width}
                    height = {props.height}
                    size = {props.size}
                    id = {props.id}
                    key = {`bg${props.id}`}
                />;

    if (props.type === 'image'){
        return <Image
                    targetSection = {props.targetSection}
                    borderRadius = {props.borderRadius || 0}
                    opacity = {props.opacity}
                    size = {props.size ? props.size : props.fontSize}
                    path = {props.path ? props.path : props.image}
                    coords = {{...props.coords}}
                    sizeParentBox = {{...props.sizeParentBox}}
                    id = {props.id}
                    key = {`image${props.id}`}
                />
    }
    if (props.type === 'media')
        return <Media
                    key = {`media${props.id}`}
                    id = {props.id}
                    targetSection = {props.targetSection}
                    sizeParentBox = {{...props.sizeParentBox}}
                    path = {props.path ? props.path : props.content}
                    coords = {{...props.coords}}
                />
        if (props.type === 'input')
            return <Input
                        targetSection = {props.targetSection}
                        size = {props.size ? props.size : props.fontSize}
                        path = {props.path ? props.path : props.image}
                        coords = {{...props.coords}}
                        sizeParentBox = {{...props.sizeParentBox}}
                        id = {props.id}
                        key = {`input${props.id}`}
                    />
};

export default BuilderComponents;