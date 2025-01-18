import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com",
    params: {
        apikey: "4512e9de",
    },
});