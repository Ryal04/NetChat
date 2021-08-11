import axios, { AxiosResponse } from "axios";
import { Agent } from "http";
import { url } from "inspector";
import { IChannel } from "../models/channels";

axios.defaults.baseURL = 'http://localhost:5000/api' 

const responseBody = (response: AxiosResponse) => response.data

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Channels = {
    list: () : Promise<IChannel[]> => request.get('/Channels'),
    create: (channel : IChannel) => request.post('/Channels',channel),
}

export default {
    Channels,
}