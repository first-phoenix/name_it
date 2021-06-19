import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';


const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: 'Name It',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        // console.log('The input text is - ', inputText);
        // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
        // this.setState({ headerExpanded: !(inputText.length > 0) });

        this.setState({
            headerExpanded: !inputText,
            suggestedNames: name(inputText),
        });

    }

    render() {
        // console.log(name('cloud'));

        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headertxt={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />

                <ResultsContainer suggestedNames={this.state.suggestedNames} />


                {/* <h3>{this.state.headerText}</h3>
                <button onClick={() => {

                    this.setState({
                        headerText: 'woaaaaaaah!',
                    });
                }

                }>
                    Magic Happens here
                </button> */}
            </div>
        )
    }
}


export default App;