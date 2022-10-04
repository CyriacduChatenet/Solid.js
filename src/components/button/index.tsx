import { Component } from "solid-js";

type ButtonType = {
    label : string;
};

export const Button : Component<ButtonType> = (props) => {
    return (
        <button>{props.label}</button>
    );
};