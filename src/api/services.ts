import api from './baseApiConfig';

const RESOURCE = '/pokemon';
const LIMIT_POKEMONS = 10;

async function getAllPokemons<Response>(): Promise<Response> {
  const response = await api.get<Response>(RESOURCE, {
    params: { limit: LIMIT_POKEMONS }
  });

  return response.data;
}

async function getDetailsPokemons<Response>(
  detailsUrl: string
): Promise<Response> {
  const response = await api.get<Response>(detailsUrl);

  return response.data;
}

const services = {
  getAllPokemons,
  getDetailsPokemons
};

export default services;
