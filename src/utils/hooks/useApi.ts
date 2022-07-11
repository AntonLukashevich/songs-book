import axios, { AxiosResponse } from 'axios';

import {environment} from "../../enviroments/environment.prod";
import {ISong} from "../interfaces";

export const useApi = () => {

  const getAllSongs = async (): Promise<ISong[]> => {
    return await axios.get<ISong[]>(`${environment.backEndUrl}/api/lyrics`)
      .then((response: AxiosResponse) => response.data)
  }

  const getSongById = async (id: number): Promise<ISong> => {
    return await axios.get(`${environment.backEndUrl}/api/lyrics/${id}`)
      .then((response: AxiosResponse) => response.data);
  }

  return {
    getAllSongs,
    getSongById
  }
}