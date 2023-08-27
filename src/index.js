import React from "react";
import ReactDOM from "react-dom/client";

import { LayoutPlain } from "./layout/LayoutPlain";
const rootNode = document.getElementById('react');

const root = ReactDOM.createRoot(rootNode);

root.render(
<React.StrictMode>
    <LayoutPlain/>
</React.StrictMode>
)