import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';


class App extends React.Component {

    state = {
        headerText: 'Name It',
        headerExpanded: true
    }

    handleInputChange = (inputText) => {
        // console.log('The input text is - ', inputText);
        // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
        // this.setState({ headerExpanded: !(inputText.length > 0) });
        this.setState({ headerExpanded: !inputText });

    }

    render() {

        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headertxt={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />


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