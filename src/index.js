import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return <>
    <p>Hello, {props.name}</p>
  </>;
};

ReactDOM.render(
    <App name={`Alex`} />,
    document.getElementById(`root`)
);