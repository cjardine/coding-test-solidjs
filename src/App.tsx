import type {Component} from 'solid-js';

import logo from './logo.svg';
import './App.module.css';
import Gallery from "./components/gallery";
import ToolBar from "./components/toolbar";
import {createEffect, createSignal, onMount} from "solid-js";


export interface IImage {
    url: string,
    alt: string
}

const App: Component = () => {
    const [images, setImages] = createSignal<IImage[]>([]);
    const [currentPage, setCurrentPage] = createSignal<number>(1);
    const [numImages, setNumImages] = createSignal<number>(6);
    const imageUrl = (id: number) => `https://picsum.photos/id/${id}/300/300`;

    async function getImages(): Promise<IImage[]> {
        if (currentPage() === undefined) return Promise.resolve([]);
        const imageResponseBlob = await fetch(`https://picsum.photos/v2/list?page=${currentPage()}&limit=${numImages()}`)
        const imageResponse: any[] = await imageResponseBlob.json()
        const output: IImage[] = imageResponse.map(image => {
            return {
                url: imageUrl(image.id),
                alt: image.author
            }
        });
        console.log(output)
        return output;
    }

    function incrementPage() {
        if (currentPage() === undefined) return;
        setCurrentPage(currentPage() + 1)
    }

    createEffect(async () => {
        setImages(await getImages())
    })
    onMount(() => {
        // setNumImages(6)
        // setCurrentPage(1)
    })
    return (
        <main>
            <Gallery images={images()}/>
            <ToolBar incrementPage={incrementPage}/>
        </main>
    );
};

export default App;
