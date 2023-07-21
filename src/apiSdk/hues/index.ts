import axios from 'axios';
import queryString from 'query-string';
import { HueInterface, HueGetQueryInterface } from 'interfaces/hue';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHues = async (query?: HueGetQueryInterface): Promise<PaginatedInterface<HueInterface>> => {
  const response = await axios.get('/api/hues', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHue = async (hue: HueInterface) => {
  const response = await axios.post('/api/hues', hue);
  return response.data;
};

export const updateHueById = async (id: string, hue: HueInterface) => {
  const response = await axios.put(`/api/hues/${id}`, hue);
  return response.data;
};

export const getHueById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/hues/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHueById = async (id: string) => {
  const response = await axios.delete(`/api/hues/${id}`);
  return response.data;
};
