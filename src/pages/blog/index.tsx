import { Link } from "@solidjs/router";
import { Component, createSignal, For } from "solid-js";

import { Button } from "@/components/button";

import "./index.css";

type Item = {
  title: string;
};

export const Blog: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  const [inputValue, setInputValue] = createSignal<string>("");
  const [list, setList] = createSignal<Item[]>([
    {
      title: "Hello world",
    },
    {
      title: "Hello world",
    },
    {
      title: "Hello world",
    },
  ]);

  return (
    <div id="blog-page">
      <h1>Blog</h1>
      <br />
      <Link href="/">
        <Button label="return to Home" />
      </Link>
      <br />
      <br />
      <h2>State management</h2>
      <button
        class="action-btn"
        onClick={() => setCount((count) => (count += 1))}
      >
        Increment &nbsp; {count}
      </button>
      <br />
      <br />
      <br />
      <input
        type="text"
        name="text"
        placeholder="Write some text"
        onInput={(e) => setInputValue(e.currentTarget.value)}
      />
      <br />
      <br />
      <p>Result of input value : {inputValue}</p>
      <br />
      <br />
      <br />
      <h2>List of elements</h2>
      <ul>
        <For each={list()}>
          {(item, i) => (
            <li>{item.title}</li>
          )}
        </For>
      </ul>
    </div>
  );
};
