import React from 'react'
import Card from "./Card"
import "./card-list.styles.css"

const Cards = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map(monster=>(
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}

export default Cards
