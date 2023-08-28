import axios from "axios";

export const getAllUser = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/userList`);
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const deleteUser = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/userList/${id}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}