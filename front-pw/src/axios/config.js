import axios from "axios";


// CONSUMIR O "CADASTRAR FRUTA"
const pwFetch = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default pwFetch;