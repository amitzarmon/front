import axios from 'axios'

const ALL_USERS_REST_API_URL='http://localhost:8080/person/';
const GET_USER_REST_API_URL='http://localhost:8080/person/{id}';
const CREATE_USER_REST_API_URL='http://localhost:8080/person/';
const UPDATE_PERSON_REST_API_URL='http://localhost:8080/person/';
const DELETE_USER_REST_API_URL='http://localhost:8080/person/{id}';


class UserService{

   getAllPeople() {
      return axios.get(ALL_USERS_REST_API_URL);
   }

   getOnePerson() {
      return axios.get(GET_USER_REST_API_URL);
   }
   createOnePerson() {
      return axios.post(CREATE_USER_REST_API_URL);
   }
   deleteOnePerson() {
      return axios.delete(DELETE_USER_REST_API_URL);
   }
   updateOnePerson() {
      return axios.put(UPDATE_PERSON_REST_API_URL);
   }
}


export default new UserService()