import { Link } from "@solidjs/router";
import { Component } from "solid-js";

import { Button } from "@/components/button";

import logo from "@/assets/logo.svg";
import "./index.css";

export const Home: Component = () => {
  return (
    <div id="home-page">
      <img class="logo" src={logo} alt="" />
      <section class="page-content">
        <h1>Welcome to Solid.js</h1>
        <Link href={"/blog"}>
          <Button label="Blog" />
        </Link>
      </section>
    </div>
  );
};
