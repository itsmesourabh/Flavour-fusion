
import axios from 'axios';
import { API_URL } from '../constants/constants';

export const getRecipes  = async(searchedQuery) => {
    try {
       let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
       return response.data;

    } catch(error){
        console.log('Error while calling the api', error.messsage);
        return error.response
    }
}

export const getRecipe = async(searchedQuery) => {
    try {
       let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
       return response.data;

    } catch(error){
        console.log('Error while calling the api', error.messsage);
        return error.response
    }
}