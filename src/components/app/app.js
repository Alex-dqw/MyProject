import React from 'react';
import Message from '../message/message.js';
const App = (props) => {
    const {name} = props;
    return <React.Fragment>
        <h1>React Application</h1>
        <Message name={name} />
    </React.Fragment>;
};
export default App;