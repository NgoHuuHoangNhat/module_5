import axios from 'axios';

export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/library");
        return result.data;
    } catch (e) {
        return 'error';
    }
}

export const deleteBookById = async (id) => {
    try {
        const result = await axios.delete("http://localhost:8080/library/" + id);
        return result.status;
    } catch (e) {
        return e.response.status;
    }
}

export const addNewBook = async (values) => {
    try {
        const result = await axios.post("http://localhost:8080/library", values);
        console.log(result);
        return result.status;
    } catch (e) {
        return e.response.status;
    }
}

export const getBookById = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/library/" + id);
        return result.data;
    } catch (e) {
        return 'err';
    }
}

export const updateBook = async (id, book) => {
    try {
        const result = await axios.put("http://localhost:8080/library/" + id, book);
        return result.status;
    } catch (e) {
        return e.response.status;
    }
}