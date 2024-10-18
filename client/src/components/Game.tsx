import { type Game } from '../types';

export const GameComponent = (props: Game) => {
  const {
    date,
    cover,
    id,
    provider,
    name,
  } = props; 
  return (
    <figure>
      <img 
        id={String(id)} 
        alt={name} 
        src={cover} 
        data-date={String(date)} 
        data-provider={provider}
      />
      <figcaption>{name}</figcaption>
    </figure>
  )
}
