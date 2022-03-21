import axios from 'axios';
import { errorMessage } from '../utils/swalMessage';
import { constants } from '../utils/constants';
import obiwan from './../static/img/404.jpg';

export const getResources = () => {
  return axios
  .get(`${constants.swapiBaseUrl}`)
  .then(response => {
    console.log(response.data);

    const currentResources = {...response.data};
    const result = Object.keys(currentResources).map((resource) => {
      return { name: resource, endpoint: currentResources[resource] }
    });

    return result;
  })
  .catch(err => {
    errorMessage("These aren't the droids you are looking for", `<div class='container py-3'><img class="error-image" src=${obiwan} alt='not found' /></div>`);
  });
}