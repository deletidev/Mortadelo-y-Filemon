import { mockCharacterList } from '../mock-character-list';
import { Character } from '../model';

export const catchCharacters = async (value: string): Promise<Character[]> => {
  //si hubiese una llamada a un servidor
  // const response = await fetch('http://localhost:3000/personajes');

  // if (!response.ok) {
  //   if (response.status === 400) {
  //     throw new Error('Petición incorrecta: ' + response.statusText);
  //   } else if (response.status === 401) {
  //     throw new Error('No autorizado');
  //   } else if (response.status === 403) {
  //     throw new Error('Acceso prohibido');
  //   } else if (response.status === 404) {
  //     throw new Error('Página no encontrada');
  //   } else if (response.status === 500) {
  //     throw new Error('Error interno del servidor');
  //   } else if (response.status === 503) {
  //     throw new Error('Servicio no disponible');
  //   } else if (response.status === 504) {
  //     throw new Error('Tiempo de espera de la puerta de enlace agotado');
  //   } else {
  //     throw new Error('Error desconocido: ' + response.statusText);
  //   }
  // }
  if (!value) {
    return mockCharacterList;
  }

  const find = mockCharacterList.filter(character =>
    character.nombre.toLowerCase().includes(value.toLowerCase())
  );

  if (find.length > 0) {
    return find;
  } else {
    throw new Error('no se ha encontrado ningún personaje');
  }
};
