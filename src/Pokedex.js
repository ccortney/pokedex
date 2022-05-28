import Pokecard from "./Pokecard.js";
import './Pokedex.css'


const Pokedex = ({pokemon}) => {
    return (
        <>
        <h1 className="Pokedex-Heading">Pokedex</h1>
        <div className="Pokedex">
            {pokemon.map(p => (
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} />
            ))}
        </div>
        </>
    )
}

export default Pokedex;