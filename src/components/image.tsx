import type { Component } from 'solid-js';
import {IImage} from "../App";
import "./image.css"

const Image: Component<{ image: IImage }> = (props: {image: IImage}) => {
    return (
        <li>
            <img src={props.image.url} alt={props.image.alt}/>
        </li>
    );
};

export default Image;
