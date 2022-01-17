import React from 'react';
import ReactDOM from 'react-dom';

const App = ({name}) => {
   return <div>
       <p>Hello, {name}.</p>
  </div>;
};

ReactDOM.render(
    <App name={`Alex`} />,
    document.getElementById(`root`)
);