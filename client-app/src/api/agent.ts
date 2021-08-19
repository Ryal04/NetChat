import axios, { AxiosResponse } from "axios";
import { IChannel } from "../models/channels";
import { history } from '../index'
import { toast } from "react-toastify";
import { IUser, IUserFormValues } from "../models/users";

axios.defaults.baseURL = 'http://localhost:5000/api' 

axios.interceptors.response.use(undefined, (error) => {
    if(error.message == "Network Error" && !error.response){
        toast.error("Network Error - Conexion with server lost")
        return;
    }

    var {status} = error.response
    if (status === 404) history.push('/notFound') 
    if (status === 500) toast.error("Server error - Check te terminal")
    
})

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('jwt');
    if(token)
    config.headers.authorization =  Bearer ${}
})
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

const User = {
    login: (user: IUserFormValues) : Promise <IUser> => request.post('/user/login',user),
    create: (user: IUserFormValues) : Promise <IUser> => request.post('/user/register',user),
    current: () : Promise <IUser> => request.get('/user'),
}
export default {
    Channels,
    User,
}