import Image from "next/image"

const Characters = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
          return(
           <div key={character.id}>
               <Image src={character.image} width={300} height={300} alt="image" />
               <h3>{character.name}</h3>
               <p>{character.origin.name}</p>
               <p>{character.location.name}</p>
           </div>
          )
          })}
    </div>
  )
}

export default Characters
