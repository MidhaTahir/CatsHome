import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField : '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cats: users }));
  }

  render() {
    const { cats, searchField } =  this.state;
    const filteredCats = cats.filter(cat => 
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className='App'>
        <h1 className="head">CATS HOME<span role="img" aria-label="cat-emoji">🐈</span></h1>
        <SearchBox 
          placeholder = "search cats"
          handleChange = {this.handleChange}
        />
        <CardList cats={filteredCats}/>
      </div>
    );
  }
}

export default App;
