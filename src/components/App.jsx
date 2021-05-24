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
import ResultsContainer from './ResultsContainer/ResultsContainer';

const name=require('@rstacruz/startup-name-generator');
// date is stored in JS objects which stores data in 
// the form of key valur pairs 
// state can be called as variable in JS
class App extends React.Component{
    state={
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames:[],
    };
    // older way to intialize object 
    // constructor(){
    //     super();
    //     this.state={
    //         headerText:'Name It!',
    //     };
    // }
    handleInputChange = (inputText)=>{
        // if you try to save state inside a normal function in the react component
        // we will face lot of issues that's why we are using arrow functions 
        // inside the class component because this keyword is not bound here 
        // alert("I am called");
        // console.log("input text is "+inputText);
        this.setState({
            // headerExpanded: inputText.length>0 ? false : true
            // above statement can also be written as 
            // headerExpanded: !(inputText.length>0) because it just toggles a value
            // when we have to check wether string is empty or not in JS no need to use
            // length also the string name itself acts as boolean'
            headerExpanded: !(inputText),
            suggestedNames : name(inputText),
            // above expression works fine 
        });
    }
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
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/> 
                {/* passing data as props  */}
                <SearchBox onInputChange={this.handleInputChange}
                />
                {/* passing function as props  */}
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}
export default App;
