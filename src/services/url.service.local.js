import { httpService } from './http.service.js'

const BASE_URL = 'url'

export const urlService = {
    getMetadata
}

async function getMetadata(urls) {
    try {
        const res = await httpService.post(`${BASE_URL}/fetch-metadata`, urls)
        return res
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}
