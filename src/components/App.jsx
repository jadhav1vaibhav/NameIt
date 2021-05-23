// function component are implemented using functions & class components are built using class
// function component 
// import React from 'react';
// function App(){
//     return <h1>This is my functional component</h1>
// }
// export default App;

// class component 
import React from 'react';
import Header from './header/header.jsx'
import './App.css';

class App extends React.Component{
    render(){
        return (
            <Header/>
        );
    }
}
export default App;
