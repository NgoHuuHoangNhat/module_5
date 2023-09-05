import axios from "axios";

export const getProductTypes = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/api/clothes-type/list`);
        return result;
    }catch(e){
        return e;
    }
}