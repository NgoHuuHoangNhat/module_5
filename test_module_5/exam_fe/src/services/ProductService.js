import axios from "axios";

export const getProducts = async (page, search, productTypeId) => {
    try {
        let result;
        if (productTypeId) {
            result = await axios.get(`http://localhost:8080/api/clothes/list?page=${page}&search=${search}&clothesTypeId=${productTypeId}`);
        } else {
            result = await axios.get(`http://localhost:8080/api/clothes/list?page=${page}&search=${search}`);
        }
        return result;
    } catch (e) {
        return e;
    }
}

export const getProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/clothes/${id}`);
        return result;
    } catch (e) {
        return e;
    }
}

export const updateProduct = async (value) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/clothes/update`, value);
        console.log(result);
        return result;
    } catch (e) {
        return e;
    }
}
export const deleteProduct = async (id) => {
    try{
        const result = await axios.delete(`http://localhost:8080/api/clothes/${id}`);
        console.log(result);
        return result;
    }catch(e){
        return e;
    }
}

export const addNewProduct = async (value) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/clothes/create`, value);
        return result;
    } catch (e) {
        return e;
    }
}
