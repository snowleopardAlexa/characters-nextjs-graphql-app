import Image from "next/image"

const Characters = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
          return(
           <div key={character.id}>
               <Image src={character.image} width={300} height={300} alt="image" />
           </div>
          )
          })}
    </div>
  )
}

export default Characters
