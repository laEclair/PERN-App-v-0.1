import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createTroublescore = async (troublescore) => {
    const {data} = await $authHost.post('api/troublescore', troublescore)
    return data
}

export const fetchTroublescores = async () => {
    const {data} = await $host.get('api/troublescore')
    return data
}

export const createService = async (service) => {
    const {data} = await $authHost.post('api/service', service)
    return data
}

export const fetchServices = async (typeId, troublescoreId, page, limit = 8) => {
    const {data} = await $host.get('api/service', {params: {
        typeId, troublescoreId, page, limit 
    }})
    return data
}

export const fetchOneService = async (id) => {
    const {data} = await $host.get('api/service/' + id)
    return data
}

export const fetchDeleteServices = async (id) => {
    const {data} = await $host.delete('api/service/' + id)
    return data
}