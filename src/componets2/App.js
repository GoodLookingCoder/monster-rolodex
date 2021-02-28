import React,{useState, useEffect} from 'react'
import Cards from "./componets2/Cards"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, [])

  const filteredMonsters = monsters.filter(monster=>(
    monster.name.toLowerCase().includes(searchInput.toLowerCase())
  ))

  return (
    <div>
      <input 
        type="search" 
        placeholder="search monster" 
        value={searchInput} 
        onChange={e=>setSearchInput(e.target.value)}
      />
      <Cards monsters={filteredMonsters}/>
    </div>
  )
}

export default App
