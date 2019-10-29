import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SingleMember from "./components/SingleMember";
// function App() {
//   return (

//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTeam: [
        {
          name: "Alice"
        },

        {
          name: "Cihan"
        },
        {
          name: "Fulvio"
        },

        {
          name: "Enric"
        },

        {
          name: "Yo"
        }
      ]
    };
  }

  addMember = member => {
    console.log(member);

    this.setState({
      myTeam: [member, ...this.state.myTeam]
    });
  };

  render() {
    console.log(this.state.myTeam);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editing <code>src/App.js</code> and save to reload.
          </p>
          {this.state.myTeam.map((member, i) => (
            <SingleMember member={member} addMember={this.addMember} key={i} />
          ))}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
