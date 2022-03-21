import axios from 'axios';
import { errorMessage } from '../utils/swalMessage';
import obiwan from './../static/img/404.jpg';

export const getResourceByEndpoint = ( endpoint ) => {
  return axios
  .get(endpoint)
  .then(response => {
    console.log(response.data);
    return response.data;
  })
  .catch(err => {
    errorMessage("These aren't the droids you are looking for", `<div class='container py-3'><img class="error-image" src=${obiwan} alt='not found' /></div>`);
  });
}