import React from 'react';

interface Props {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
}

export const CharacterSearch: React.FC<Props> = props => {
  const { value, setValue, onSubmit } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form
      className="search-bar"
      id="search-bar"
      role="search"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="search-bar__label">
        ENCUENTRA A TODOS LOS PERSONAJES:
      </label>
      <div className="search-bar__text">
        <input
          type="search"
          name="search"
          id="search"
          className="search-bar__input"
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />

        <button type="submit" className="search-bar__btn">
          Filtrar
        </button>
      </div>
    </form>
  );
};
