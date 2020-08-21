import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-d1-test.herokuapp.com/api'
});

export const filterApi = () => {

    
    return axios.get('https://api-d1-test.herokuapp.com/api/filter').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        return(response.data)
    })
      

}

export default api