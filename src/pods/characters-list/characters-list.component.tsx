import React from 'react';
import { CharacterSearch, CharactersGrid } from './components';
import { Character } from './model';

interface Props {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: () => void;
  characters: Character[];
  error: string;
}

export const CharacterListComponent: React.FC<Props> = props => {
  const { characters, error, handleSubmit, setValue, value } = props;
  return (
    <>
      <CharacterSearch
        value={value}
        setValue={setValue}
        onSubmit={handleSubmit}
      ></CharacterSearch>
      <CharactersGrid characterList={characters} error={error}></CharactersGrid>
    </>
  );
};
