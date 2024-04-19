import axios, { AxiosResponse } from "axios";

export const apiFormBlocks = () => {
  return axios
    .get(`/api/v1/form/blocks`)
    .then((response: AxiosResponse) => {
      return response.data.blocks;
    })
    .catch((error) => {
      console.log("Error: ", error);
      return [];
    });
};
