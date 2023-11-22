import React from 'react';
import { Character } from '../model';
import { CharacterContainer } from './character-item.component';

interface Props {
  characterList: Character[];
  error: string;
}

export const CharactersGrid: React.FC<Props> = React.memo(props => {
  const { characterList, error } = props;

  return (
    <div className="characters-list">
      {characterList.length > 0 ? (
        characterList.map((character: Character) => (
          <CharacterContainer
            character={character}
            key={character.id}
          ></CharacterContainer>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
});
