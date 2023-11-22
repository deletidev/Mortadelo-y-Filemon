import React from 'react';

import { Character } from './model';
import { catchCharacters } from './api';
import { CharacterListComponent } from './characters-list.component';

export const CharacterListContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    catchCharacters(value)
      .then(data => setCharacters(data))
      .catch((error: Error) => setError(error.message));
  }, []);

  const handleSubmit = () => {
    setCharacters([]);
    setError('');
    catchCharacters(value)
      .then(data => {
        setCharacters(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      });
  };

  return (
    <CharacterListComponent
      value={value}
      setValue={setValue}
      characters={characters}
      error={error}
      handleSubmit={handleSubmit}
    ></CharacterListComponent>
  );
};
