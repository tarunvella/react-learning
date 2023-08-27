import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
const rootNode = document.getElementById('react');

const root = ReactDOM.createRoot(rootNode);

root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)