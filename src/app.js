const root = document.getElementById('root');
const heading = document.createElement('h1');
heading.innerHTML = `Namastey react BootCamp`;
root.appendChild(heading);


// get a browser node element
const reactRoot = document.getElementById('react');
// instruct reactDOM to create root container element for a browser node element
const reactContainer = ReactDOM.createRoot(reactRoot);
// create react element (the smallest react component ever)
const reactHeader = React.createElement('h2', {}, "Hello from react");

// render the react element(component) in a react container which is using reactDOM
reactContainer.render(reactHeader);