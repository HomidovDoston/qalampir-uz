import axios from "axios";
import { Api_PATH } from "../Utils/constants";

export const Api = axios.create({
    baseURL : Api_PATH ,
    headers : {
        Authorization: "Token" + sessionStorage.getItem("APP_QALAMPIR_TOKEN"),
    }
})