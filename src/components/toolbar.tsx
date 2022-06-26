import type {Component} from 'solid-js';
import "./toolbar.css"

const ToolBar: Component<{ incrementPage: Function }> = (props: { incrementPage: Function}) => {
    return (
        <div class="tool-bar">
            <button onClick={() => props.incrementPage()}>Generate</button>
        </div>
    );
};

export default ToolBar;
