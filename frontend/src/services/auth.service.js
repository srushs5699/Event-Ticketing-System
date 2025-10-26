import axios from 'axios';

// Use a separate axios instance for public auth routes
const AUTH_API_URL = '/api/auth/';

class AuthService {
    async login(username, password) {
        const response = await axios.post(AUTH_API_URL + 'login', {
            username,
            password,
        });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('token');
    }

    async register(username, password) {
        return axios.post(AUTH_API_URL + 'register', {
            username,
            password,
        });
    }
}

export default new AuthService();