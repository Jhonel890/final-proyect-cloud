import { API_URL } from "../constants/api";

export const getPreguntas = async (personaId) => {
    const response = await fetch(API_URL +`/inquietud/persona/${personaId}`);
    const data = await response.json();
    return data;
  };
  
  export const getPreguntaDetalles = async (preguntaId) => {
    const response = await fetch(API_URL + `/inquietud/${preguntaId}`);
    const data = await response.json();
    return data;
  };
  