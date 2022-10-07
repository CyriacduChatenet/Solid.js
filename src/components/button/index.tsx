import { Component } from "solid-js";

import './index.css';

type ButtonType = {
    label : string;
};

export const Button : Component<ButtonType> = (props) => {
    return (
        <button id="button">{props.label}</button>
    );
};