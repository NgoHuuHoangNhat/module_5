import axios from "axios";

export const getAll = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/customer_type`);
        return result;
    }catch(e){
        console.log(e);
    }
}