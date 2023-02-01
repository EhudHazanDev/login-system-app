// import axios from 'axios';

const MOCK = true;
const BASE_URL = MOCK ? 'https://private-052d6-testapi4528.apiary-mock.com' : 'http: //localhost:3000/api'

export const HttpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
}

async function ajax(endpoint, method = 'GET', data = null) {
    const options = _buildOptions(method, data);
    try {
        const url = `${BASE_URL}${endpoint}`;
        const res = await fetch(url, options);
        return res.json();
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${options}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login')
        }
        throw err
    }
}

function _buildOptions(method, data) {
    let options;
    if (method == 'POST') {
        options = {
            method: 'POST',
            body: JSON.stringify(data)
        }
    }
    if (method == 'GET') {
        options = {
            method: 'GET',
            headers: { Authentication: 'bearer ${token}' }
        }
    }
    return options;
}