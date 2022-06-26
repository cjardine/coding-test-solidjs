import type { Component } from 'solid-js';
import Image from "./image";
import {For} from "solid-js";
import {IImage} from "../App";
import './gallery.css'


const Gallery: Component<{images: IImage[]}> = (props: {images: IImage[]}) => {
    return (
        <ul>
            <For each={props.images}>
                {(image, index) => (<Image image={image}/>)}
            </For>
        </ul>
    );
};

export default Gallery;
