import React, {Component} from "react"
import { CardList } from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      monsters: [],
      searchInput: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster=>(
      monster.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    ))

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleChange}  
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
