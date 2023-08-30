import axios from "axios";

export const getAllCustomer = async (page, search) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?_page=${page}&_limit=3&name_like=${search}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const addCustomer = async (customer) => {
    try {
        const result = await axios.post(`http://localhost:8080/customers`, customer);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const findByCode = async (code) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?code=${code}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const findByPhoneNumber = async (phoneNumber) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?phone_number=${phoneNumber}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const findByIdCard = async (idCard) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?id_card=${idCard}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}
export const findByEmail = async (email) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?email=${email}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/customers?id=${id}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const updateCustomer = async (customer) => {
    try {
        const result = await axios.put(`http://localhost:8080/customers/${customer.id}`, customer);
        return result;
    } catch (e) {
        console.log(e);
    }
}

export const deleteCustomer = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/customers/${id}`);
        return result;
    } catch (e) {
        console.log(e);
    }
}
