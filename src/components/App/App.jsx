import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';


class App extends React.Component {

    state = {
        headerText: 'Name It',
    }

    render() {

        return (
            <div>
                <Header headertxt={this.state.headerText} />
                <SearchBox />


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