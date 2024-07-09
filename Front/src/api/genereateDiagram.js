import axios from "axios"

export const generateDiagram = axios.create({
    baseURL: "https://generatediagramabackend.onrender.com/api"
});