import axios from "axios";
import FacilityCreate from "../components/facility/FacilityCreate";


export const getAllFacilityList = async (page, search) => {
    try {
        const result = await axios.get(`http://localhost:8080/facility?_page=${page}&_limit=3&name_like=${search}`);
        return result;
    } catch (e) {
        return 500;
    }
}

export const addFacility = async (facility) => {
    try {
        const result = await axios.post(`http://localhost:8080/facility`, facility)
        return result;
    } catch (e) {
        return 500;
    }
}

export const getFacilityByCode = async (code) => {
    try {
        const result = await axios.get(`http://localhost:8080/facility?code=${code}`)
        return result;
    } catch (e) {
        return 500;
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/facility/${id}`)
        return result;
    } catch (e) {
        return 500;
    }
}

export const updateFacility = async (facility) => {
    try {
        const result = await axios.get(`http://localhost:8080/facility/${facility.id}`,facility)
        return result;
    } catch (e) {
        return 500;
    }
}