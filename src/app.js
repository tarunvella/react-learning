import { createRoot } from "react-dom/client";
import { createElement } from "react";
const root = document.getElementById('root');
const heading = document.createElement('h1');
heading.innerHTML = `Namastey react BootCamp`;
root.appendChild(heading);

// get a browser node element
const reactRoot = document.getElementById('react');
// instruct reactDOM to create root container element for a browser node element
const reactContainer = createRoot(reactRoot);
// create react element (the smallest react component ever)
const reactHeader = createElement('h2', {}, "Hello from react");

// render the react element(component) in a react container which is using reactDOM
reactContainer.render(reactHeader);