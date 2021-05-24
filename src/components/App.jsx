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
import SearchBox from './SearchBox/SearchBox';

// date is stored in JS objects which stores data in 
// the form of key valur pairs 
// state can be called as variable in JS
class App extends React.Component{
    state={
        headerText: 'Name It!',
    };
    render(){
        return (
            // <div>
            //     <Header/>
            //     <h3>{this.state.headerText}</h3>
            //     to access value of state
            //     <button
            //         onClick={()=>{
            //             // this.state.headerText="Magic happend?"
            //             // just updating the state manually does not trigger 
            //             // rerender 
            //             // so we have to use setstate method 


            //             // console.log(this.state.headerText);
            //             this.setState({
            //                 headerText:"Magic happend?", //state is getting updated
            //             });
            //         }}
            //         >
            //         Magic Happens here
            //     </button>
            //     set contains data which can chnage at any point 
            //     of time , state is used to store the data which cane be used 
            //     in future

            //     props are used to transfer data from parent component 
            //     to child component 
            // </div>
            <div>
                <Header headTitle={this.state.headerText}/>
                <SearchBox/>
            </div>
        );
    }
}
export default App;
