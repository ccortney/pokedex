import './Pokecard.css'

const Pokecard = ({id, name, type}) => {
    const imgSrc = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-name">{name}</h3>
            <img src={imgSrc} alt="pokemon" className="Pokecard-img" />
            <p className="Pokecard-type">Type: {type}</p>
        </div>
    )
}

export default Pokecard;