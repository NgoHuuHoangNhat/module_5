import axios from "axios";

export const getContractList = async (page, start, end) => {
    try {
        const result = await axios.get(`http://localhost:8080/bookings?_page=${page}&_limit=3`);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const findByCode = async (code) => {
    try {
        const result = await axios.get(`http://localhost:8080/bookings?code=${code}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}