import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: "abcd", name: "Max", age: 28 },
      { id: "1234", name: "Manu", age: 29 },
      { id: "xyz", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    //this way, the reference is copied
    //const persons = this.state.persons;

    //this way - slice() without args - copies the original array
    //const persons = this.state.persons.slice();

    //or using es6 syntax: the spread "..." operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //deprecated
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    //instead of the spread operator we can use even:
    //const person = Object.assign({}, this.state.persons[personsIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //this gets merged with the previous state, because of the class usage
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      //.map(el => ...) el can be everyting, like in java 8
      persons = (
        <div>
          {this.state.persons.map((el, index) => {
            return (
              <Person
                name={el.name}
                age={el.age}
                //it was click={this.dele...}, the alternative would be a bind usage
                click={() => this.deletePersonHandler(index)}
                //key should be sg uniqe, which can be a db id, or anything unique
                key={el.id}
                changed={(event) => this.nameChangedHandler(event, el.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "blue",
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classe = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

/*
<Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
*/
