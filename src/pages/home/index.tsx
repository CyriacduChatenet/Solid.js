import { Button } from "@/components/button";
import { Link } from "@solidjs/router";
import { Component } from "solid-js";

export const Home: Component = () => {
    return (
        <>
        <h1>Home</h1>
        <Link href={'/blog'}><Button label="Home" /></Link>
        </>
    );
};