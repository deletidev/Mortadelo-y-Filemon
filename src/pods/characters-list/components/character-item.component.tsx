import React from 'react';
import { Character } from '../model';

interface Props {
  character: Character;
}
export const CharacterContainer: React.FC<Props> = props => {
  const { character } = props;

  return (
    <div className="character__container">
      <div
        className="character__header"
        data-especialidad={character.especialidad.toLowerCase()}
      >
        <p>Especialidad</p>
        <p className="character__specialty">{character.especialidad}</p>
      </div>
      <div className="character__overflow">
        <img
          src={character.imagen}
          alt={character.nombre}
          className="character__img"
        />
        <div className="character__text">
          <p className="character__title">{character.nombre.toUpperCase()}</p>
          <div>
            <p className="character__habilidad">Habilidades</p>
            <p>{character.habilidades.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
