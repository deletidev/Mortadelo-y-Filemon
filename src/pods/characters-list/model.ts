export interface Character {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string[];
  amigo: string;
  imagen: string;
}

export type CharactersClass =
  | 'characters-list'
  | 'character__container'
  | 'character__header'
  | 'character__speciality'
  | 'character__overflow'
  | 'character__img'
  | 'character__text'
  | 'character__title'
  | 'character__habilidad';
