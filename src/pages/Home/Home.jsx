import { useEffect, useState } from "react"
import "./home.css"
import axios from "axios"
import Button from "../../components/Button/Button"

export default () => {

    const [pokemon, setPokemon] = useState();
    const [types, setTypes] = useState(['fire', 'water', 'rock']);

    //#region DATA FETCHING
    //Buttons that fetch pokemon data
    useEffect(() => {
        async function fetchData () {
            axios.get(`https://pokeapi.co/api/v2/type/`).then(res => {
                console.log(res.data.results);
                setTypes(res.data.results)
            })
        }

        fetchData();
    }, [])

    //Handler function for printing data on click
    const handleClick = async (typeTitle) => {
        axios.get(`https://pokeapi.co/api/v2/type/${typeTitle}`).then((res) => {
            console.log(res.data.pokemon)
            setPokemon(res.data.pokemon)
        })
    }

    //#endregion

    //#region JSX RETURN

    return (
        <div className="Home page">

            

            {types.map((item, index) => (
                 <Button key={index} type={item} handleClick={handleClick} />
            ))}

            {pokemon && pokemon.length > 0 ? 
                (pokemon.map((item, index) => {
                    return <h3 key={index}> {item.pokemon.name}</h3>
            })) : (
                <div>
                    <h2>Select a pokemon type!</h2>
                </div>
            )}
        </div>
    )

    //#endregion
}