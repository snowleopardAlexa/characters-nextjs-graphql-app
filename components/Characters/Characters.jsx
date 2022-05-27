import styles from './Characters.module.css'
import Image from "next/image"

const Characters = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
          return(
           <div className={styles.container} key={character.id}>
             <div className={styles.wrapper}>
               <Image src={character.image} width={200} height={200} alt="image" />
               <h3>{character.name}</h3>
               <p>{character.origin.name}</p>
               <p>{character.location.name}</p>
              </div>
           </div>
          )
          })}
    </div>
  )
}

export default Characters
