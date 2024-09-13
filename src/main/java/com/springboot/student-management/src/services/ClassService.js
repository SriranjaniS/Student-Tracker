import axios from 'axios';

const API_URL = 'http://localhost:8080/api/classes';

class ClassService {
    getClasses() {
        return axios.get(API_URL);
    }
	getClassById(id) {
        return axios.get(`${API_URL}/${id}`);
	}

    createClass(classData) {
        return axios.post(API_URL, classData);
    }

    updateClass(id, classData) {
        return axios.put(`${API_URL}/${id}`, classData);
    }

    deleteClass(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new ClassService();
