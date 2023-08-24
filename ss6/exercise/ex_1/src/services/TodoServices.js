import axios from 'axios';

export const getAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/todoList');
        return result.data;
    } catch (e) {
        console.log("error");
    }
}

export const insertWork = async (values) => {
    try {
        const result = await axios.post('http://localhost:8080/todoList', values)
        console.log(result)
        return result.status;
    } catch (e) {
        return e.response.status;
    }
}