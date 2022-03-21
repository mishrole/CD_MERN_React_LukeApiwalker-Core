import axios from 'axios';
import { errorMessage } from '../utils/swalMessage';
import { constants } from '../utils/constants';
import obiwan from './../static/img/404.jpg';

export const getPeopleById = (id) => {
  return axios
  .get(`${constants.swapiBaseUrl}/people/${id}`)
  .then(response => {
    console.log(response.data);
    return response.data;
  })
  .catch(err => {
    errorMessage("These aren't the droids you are looking for", `<div class='container py-3'><img class="error-image" src=${obiwan} alt='not found' /></div>`);
  });
}